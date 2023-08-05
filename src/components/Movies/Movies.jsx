import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';

const Movies = () => {
  const [page, setPage] = useState(1);

  const { genreIdOrCategoryName } = useSelector(
    (state) => state.selectGenreOrCategoryStore,
  );

  // console.log('movies ' + genreIdOrCategoryName);
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
  });

  if (isFetching) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size="4em" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display={'flex'} justifyContent={'center'} mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please try again with a different search term
        </Typography>
      </Box>
    );
  }

  if (error) return 'error occured';

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
