import Post from 'components/Post';
import { Flex, Box } from 'reflexbox';
import theme from '../theme/theme';

const Posts = ({ data }) => {
  return (
    <Box theme={theme} variant="container">
      <Box my={40} as="h2">
        Posts
      </Box>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/posts?_limit=10`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Posts;
