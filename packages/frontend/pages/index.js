import fetch from 'isomorphic-unfetch';
import Card from 'components/Card';

const Home = ({
  movies = [
    { id: 1, movie_title: 'sdf' },
    { id: 2, movie_title: 'fd' },
  ],
}) => {
  return (
    <div className="container">
      {movies && movies.map((movie) => <Card key={movie.id} movie={movie} />)}
    </div>
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
