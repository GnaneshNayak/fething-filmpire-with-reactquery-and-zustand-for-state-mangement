import React from 'react';
import { Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      {/* <Grow in key={i} timeout={(i + 1) * 250}> */}
      <>
        <Link to={`/movie/${movie.id}`} className={classes.links}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://www.filmurray.com/200/300'
            }
          />
          <Typography variant="h5" className={classes.title}>
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average}/10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </>
    </Grid>
  );
};

export default Movie;
