import fetch from 'isomorphic-unfetch';
import Card from 'components/Card';
import { Flex, Box } from 'reflexbox';
import theme from '../theme/theme';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import propTypes from 'prop-types';

const Home = ({ movies }) => {
  const { t } = useTranslation('common');
  return (
    <Box theme={theme} variant="container">
      <Image src="/images/chewy.jpg" width={2400} height={1600} quality={75} />
      <Box my={40} as="h2">
        {t('Latest Movies')}
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={['column', null, null, 'row']}
        mb={100}
        flexWrap="wrap"
      >
        {movies.map((movie) => (
          <Box key={movie.id} width={['100%', null, null, '30%']}>
            <Card movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

Home.propTypes = {
  movies: propTypes.array.isRequired,
};

export async function getServerSideProps({ locale }) {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
