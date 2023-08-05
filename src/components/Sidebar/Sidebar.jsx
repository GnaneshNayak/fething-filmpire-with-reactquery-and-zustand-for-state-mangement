import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useTheme } from '@mui/styles';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcon from '../../assets/genres';
import { useSelector, useDispatch } from 'react-redux';
import { selectGenreOrCategory } from '../../Fetures/currentGenreOrCategory';
// import { selectGenreOrCategory } from '../../Fetures/currentGenreOrCategory';

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const { data, isFetching } = useGetGenresQuery();
  // console.log('from ' + genreId);

  if (isFetching) return <Box>'loading......'</Box>;

  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  // const genres = [
  //   { label: 'Action', value: 'action' },
  //   { label: 'Horror', value: 'horror' },
  //   { label: 'Comedy', value: 'comedy' },
  //   { label: 'Animation', value: 'animation' },
  // ];

  const redLogo =
    'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo =
    'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  return (
    <>
      <Link to={'/'} className={classes.imageLink}>
        <img
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="filmpire logo"
          className={classes.image}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} to="/" className={classes.links}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img
                  src={genreIcon[label.toLowerCase()]}
                  className={classes.genreImage}
                  width={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>
        {data.genres.map(({ id, name }) => (
          <Link key={id} to="/" className={classes.links}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon>
                <img
                  src={genreIcon[name.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};
export default Sidebar;
