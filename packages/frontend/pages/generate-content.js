import { Box } from 'reflexbox';
import getConfig from 'next/config';
import theme from '../theme/theme';
import faker from 'faker';

const { publicRuntimeConfig } = getConfig();

function GenerateContent() {
  const addContent = async () => {
    let i;
    let count = 1;

    for (i = 0; i < count; i++) {
      const postData = {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
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
    }
  };
  return (
    <Box theme={theme} variant="container">
      <button onClick={() => addContent()}>Generate Strapi Content</button>
    </Box>
  );
}

export default GenerateContent;
