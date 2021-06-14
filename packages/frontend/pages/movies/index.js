import { Flex, Box } from 'reflexbox';
import theme from '../../theme/theme';

const MoviesPage = ({ movies }) => {
  return (
    <Box theme={theme} variant="continaer" pt={40}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies?_limit=3`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

export default MoviesPage;
