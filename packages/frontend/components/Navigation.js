import styled from '@emotion/styled';

const Navigation = () => {
  return <NavigationStyled>Navigation</NavigationStyled>;
};

const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      color: #4c9ee3;

      &:hover {
        text-decoration: underline;
      }

      &.active {
        color: #ef6800;
      }
    }
  }
`;

export default Navigation;
