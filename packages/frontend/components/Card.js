import styled from '@emotion/styled';

const Card = ({ movie }) => {
  return <CardStyled>{movie.title}</CardStyled>;
};

const CardStyled = styled.div``;

export default Card;
