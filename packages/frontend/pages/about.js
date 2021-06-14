import { NextSeo } from 'next-seo';
import { Box } from 'reflexbox';
import fetch from 'isomorphic-unfetch';
import theme from '../theme/theme';

const About = ({ page }) => {
  const SEO = {
    title: page.title,
    description: 'Just your normal about page',

    openGraph: {
      title: page.title,
      description: 'Just your normal about page',
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Box theme={theme} variant="container">
        <Box as="h2" my={40}>
          {page.title}
        </Box>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/pages/60c6ee539d55c53fecd3c003`);
  const data = await res.json();

  return {
    props: {
      page: data,
    },
  };
}

export default About;
