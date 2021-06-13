import fetch from 'isomorphic-unfetch';
import Card from 'components/Card';
import { Flex, Box } from 'reflexbox';

const Home = ({ movies }) => {
  console.log(movies);
  return (
    <Box maxWidth={960} width="100%" mx="auto" px={30}>
      <h2>Latest Movies</h2>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
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
