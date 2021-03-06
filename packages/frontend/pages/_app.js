import Header from 'components/Header';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import theme from '../theme/theme';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { DefaultSeo } from 'next-seo';
import ContextWrapper from 'components/ContextWrapper';
import SEO from '../next-seo.config';
import { appWithTranslation } from 'next-i18next';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigation = await res.json();
  return { navigation };
};

export default appWithTranslation(MyApp);
