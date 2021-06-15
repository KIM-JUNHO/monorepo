import { Box } from 'reflexbox';
import getConfig from 'next/config';
import theme from '../theme/theme';

const { publicRuntimeConfig } = getConfig();

function GenerateContent() {
  const addContent = async () => {
    const postData = {
      title: 'some title',
      content: 'add some content',
    };

    const generate = await fetch(`${publicRuntimeConfig.API_URL}/posts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const generateResponse = await generate.json();
    console.log(generateResponse);
  };
  return (
    <Box theme={theme} variant="container">
      <button onClick={() => addContent()}>Generate Strapi Content</button>
    </Box>
  );
}

export default GenerateContent;
