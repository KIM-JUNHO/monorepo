import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import propTypes from 'prop-types';

const Card = ({ movie, year }) => {
  const { IMAGES_DOMAIN } = process.env;

  if (!movie.genre) {
    movie.genre = {};
    movie.genre.slug = 'uncategorized';
  }

  return (
    <CardStyled>
      {movie.poster && (
        <div className="poster">
          <Image src={IMAGES_DOMAIN + movie.poster.url} width={500} height={500} />
        </div>
      )}
      <div className="body">
        <h3>
          {movie.title} - {year}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />

        <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>
          <a>More about this movie</a>
        </Link>
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
  // movie: propTypes.oneOfType([propTypes.object, propTypes.array]),
  movie: propTypes.shape({
    id: propTypes.string,
  }).isRequired,
  year: propTypes.number,
};

Card.defaultProps = {
  year: 1984,
};

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`;

export default Card;
