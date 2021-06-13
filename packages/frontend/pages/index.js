import fetch from 'isomorphic-unfetch';
import Card from 'components/Card';
import { Flex, Box } from 'reflexbox';
import theme from '../theme/theme';

const Home = ({ movies }) => {
  console.log(movies);
  return (
    <Box theme={theme} variant="container">
      <Box my={40} as="h2">
        Latest Movies
      </Box>
      <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
        {movies.map((movie) => (
          <Box key={movie.id} width={['100%', null, null, '30%']}>
            <Card movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

export default Home;
