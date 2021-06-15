import { Box } from 'reflexbox';
import getConfig from 'next/config';
import theme from '../theme/theme';

const { publicRuntimeConfig } = getConfig();

function GenerateContent() {
  return (
    <Box theme={theme} variant="container">
      <button>Generate Strapi Content</button>
    </Box>
  );
}

export default GenerateContent;
