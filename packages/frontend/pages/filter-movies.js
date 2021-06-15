import { Flex, Box } from 'reflexbox';
import theme from '../theme/theme';
import Select from 'react-select';

const FilterMovies = ({ movies, actors, genres }) => {
  const handleActors = (values) => {
    console.log(values);
  };
  return (
    <>
      <Box theme={theme} variant="container">
        <Box as="h2" my={40}>
          Filter movies
        </Box>

        <Flex mb={100}>
          <Box width={200} mr={20}>
            <Select
              getOptionLabel={(option) => `${option.first_name + option.last_name}`}
              getOptionValue={(option) => option.id}
              options={actors}
              instanceId="actors"
              isMulti
              placeholder="Filter by Actors"
              onChange={(values) => handleActors(values.map((actor) => actor.id))}
            />
          </Box>
          <Box>
            {movies.map((movie) => (
              <Box key={movie.id} p={10}>
                <strong>{movie.title}</strong> - {movie.genre ? movie.genre.title : null}
                <br />
                {movie.actors.length > 0 &&
                  movie.actors.map((actor) => (
                    <small key={actor.id}>
                      {actor.first_name} {actor.last_name} &nbsp;
                    </small>
                  ))}
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const moviesData = await res.json();

  const resActors = await fetch(`${API_URL}/actors`);
  const actorsData = await resActors.json();

  const resGenres = await fetch(`${API_URL}/genres`);
  const genresData = await resGenres.json();

  return {
    props: {
      movies: moviesData,
      actors: actorsData,
      genres: genresData,
    },
  };
}

export default FilterMovies;
