import React from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';

const Pagination = ({ currentPage, totalPage, setPage }) => {
  // const setPage = useQueryStore(s.setPage);

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
      // setPages(currentPage);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPage) {
      setPage((prevPage) => prevPage + 1);
      // setPages(currentPage);
    }
  };

  if (!totalPage) return;
  return (
    <div>
      <Box display={'flex'} justifyContent={'center'}>
        <Button
          variant="contained"
          sx={{ margin: '10px 2px' }}
          onClick={handlePrev}
        >
          Prev
        </Button>
        <Typography variant="h3" sx={{ margin: '0 20px !important' }}>
          {currentPage}
        </Typography>
        <Button
          variant="contained"
          sx={{ margin: '10px 2px' }}
          onClick={handleNext}
        >
          next
        </Button>
      </Box>
    </div>
  );
};

export default Pagination;
