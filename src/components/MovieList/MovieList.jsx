import React from 'react';
import Movie from '../Movie/Movie';
import useStyles from './styles';
import { Grid } from '@mui/material';
import useMovies from '../../hooks/useMovies';

const MovieList = ({ movies }) => {
  const classes = useStyles();
  console.log(movies);
  return (
    <Grid container className={classes.moviesContiner}>
      {movies.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map((movie, i) => (
            <Movie key={i} movie={movie} i={i} />
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default MovieList;
