import { Box } from 'reflexbox';
import getConfig from 'next/config';

function PayedArticles({ articles }) {
  console.log(articles);
  return (
    <>
      <Box variant="container">
        <Box as="h2" my={40}>
          Payed Articles
        </Box>
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        ))}
      </Box>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(ctx) {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/payed-articles`);
  const articles = await res.json();

  return {
    props: {
      articles: articles,
    },
  };
}

export default PayedArticles;
