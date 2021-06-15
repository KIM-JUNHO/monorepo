import { Box } from 'reflexbox';
import getConfig from 'next/config';

function PayedArticles({ articles, authData }) {
  console.log(articles, authData);
  return (
    <>
      <Box variant="container">
        <Box as="h2" my={40}>
          Payed Articles
        </Box>
        {/* {articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        ))} */}
      </Box>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(ctx) {
  const loginInfo = {
    identifier: 'author',
    password: 'strapi',
  };

  const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo),
  });
  const loginResponse = await login.json();

  const res = await fetch(`${publicRuntimeConfig.API_URL}/payed-articles`);
  const articles = await res.json();

  return {
    props: {
      articles: articles,
      authData: loginResponse,
    },
  };
}

export default PayedArticles;
