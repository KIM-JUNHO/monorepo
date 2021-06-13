import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}

          .container {
            max-width: 960px;
            width: 100%;
            margin: 0 auto;
            padding: 30px;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
