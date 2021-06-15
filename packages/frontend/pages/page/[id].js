import { Box } from 'reflexbox';
import theme from '../../theme/theme';
import getConfig from 'next/config';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Page = ({ content }) => {
  const router = useRouter();

  return (
    <Box theme={theme} variant="continaer">
      <h2>{content.title}</h2>
      <div className="body">{content.content}</div>
      <br />
      <br />
      <Link href={router.asPath} locale={router.locale === 'en' ? 'kr' : 'en'}>
        <a>{router.locale == 'en' ? '한국어' : 'English'}</a>
      </Link>
    </Box>
  );
};

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { locale } = context;

  let translation = undefined;

  const initialRes = await fetch(`${publicRuntimeConfig.API_URL}/pages/${id}`);
  const initial = await initialRes.json();

  if (locale === 'kr') {
    const translationRes = await fetch(
      `${publicRuntimeConfig.API_URL}/pages/${initial.localizations[0].id}`
    );
    translation = await translationRes.json();
  }

  return {
    props: {
      content: translation ? translation : initial,
    },
  };
}

export default Page;
