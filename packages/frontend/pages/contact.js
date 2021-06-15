import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Box } from 'reflexbox';

const Contact = () => {
  const { t } = useTranslation('footer');
  return (
    <>
      <Box variant="container">
        <Box as="h2" my={40}>
          {t('common:Latest Movies')}
          <br />
          {t('contact:Contact')}
        </Box>
        <div>{t('contact:This is a contact page')}</div>
      </Box>
    </>
  );
};
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  };
}

export default Contact;
