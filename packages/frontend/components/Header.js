import styled from '@emotion/styled';

const Header = () => {
  return <HeaderStyled>Now I AM a real Header</HeaderStyled>;
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.primary};
`;

export default Header;
