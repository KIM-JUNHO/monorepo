import { Box } from 'reflexbox';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import theme from '../theme/theme';

const { publicRuntimeConfig } = getConfig();

function Login() {
  return (
    <>
      <LoginStyled>
        <Box theme={theme} variant="container">
          <Box as="h2" my={40}>
            You need to login to access this page
          </Box>
        </Box>
      </LoginStyled>
    </>
  );
}

const LoginStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
`;

export default Login;
