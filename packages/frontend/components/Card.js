import styled from '@emotion/styled';

const Card = ({ movie }) => {
  const { API_URL } = process.env;

  return (
    <CardStyled>
      <div className="poster">
        <img src={API_URL + movie.poster.url} alt="" />
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div``;

export default Card;
