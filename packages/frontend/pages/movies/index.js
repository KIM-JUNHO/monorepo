import { useRouter } from 'next/router';
import { Flex, Box } from 'reflexbox';
import theme from '../../theme/theme';

const MoviesPage = ({ movies, page }) => {
  const router = useRouter();
  return (
    <Box theme={theme} variant="continaer" pt={40}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
      <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
        <button onClick={() => router.push(`/movies?page=${page - 1}`)}>Previous</button>
        <button onClick={() => router.push(`/movies?page=${page + 1}`)}>Next</button>
      </Flex>
    </Box>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies?_limit=3`);
  const data = await res.json();

  return {
    props: {
      movies: data,
      page: +page,
    },
  };
}

export default MoviesPage;
