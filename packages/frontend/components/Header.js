import styled from '@emotion/styled';
import { rem } from 'polished';
import { Flex, Box } from 'reflexbox';
import theme from '../theme/theme';
import Navigation from './Navigation';

const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <Box theme={theme} variant="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <img src="/images/logo.svg" alt="Sites logo" />
            <span className="logo-text">Next Movies</span>
          </div>
          <Navigation />
        </Flex>
      </Box>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? '#000000' : '#efefef')};
  padding: 20px;
  .logo {
    display: flex;
    align-items: center;
    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
