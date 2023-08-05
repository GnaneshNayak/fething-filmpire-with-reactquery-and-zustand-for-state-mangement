import Movie from '../Movie/Movie';
import useStyles from './styles';
import { Grid } from '@mui/material';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContiner}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
