import MovieList from '../MovieList/MovieList';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';
import useMovies from '../../hooks/useMovies';
import Pagination from '../Pagination/Pagination';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
  const [page, setPage] = useState(1);

  const { data, isFetching, error, hasNextPage, fetchNextPage } = useMovies({
    page,
  });

  if (isFetching) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size="4em" />
      </Box>
    );
  }
  console.log(data);

  // if (!data.results.length) {
  //   return (
  //     <Box display={'flex'} justifyContent={'center'} mt="20px">
  //       <Typography variant="h4">
  //         No movies that match that name.
  //         <br />
  //         Please try again with a different search term.
  //       </Typography>
  //     </Box>
  //   );
  // }
  // console.log(data);

  if (error) return 'error occured';

  const fetchedMovies =
    data.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedMovies}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
    >
      <div>
        <MovieList movies={data} />
      </div>
    </InfiniteScroll>
  );
  {
    /* <Box display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            sx={{ margin: '10px 2px' }}
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Prev
          </Button>
          <Typography variant="h3" sx={{ margin: '0 20px !important' }}>
            {page}
          </Typography>
          <Button
            variant="contained"
            sx={{ margin: '10px 2px' }}
            onClick={() => {
              setPage(page + 1);
              fetchNextPage();
            }}
          >
            next
          </Button>
        </Box>
      </div> */
  }
  {
    /* </div> */
  }
  {
    /* ); */
  }
};

export default Movies;
