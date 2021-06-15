import { Box } from 'reflexbox';
import styled from '@emotion/styled';
import theme from '../theme/theme';

function AddMovie() {
  return (
    <AddMovieStyled>
      <Box theme={theme} variant="container">
        <Box as="h2" my={40}>
          Add movie
        </Box>
      </Box>
    </AddMovieStyled>
  );
}

const AddMovieStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
`;

export default AddMovie;
