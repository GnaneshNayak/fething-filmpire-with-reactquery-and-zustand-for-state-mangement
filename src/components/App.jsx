import { CssBaseline } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Navbar, Profile } from '.';
import useStyles from './styles';

const router = createBrowserRouter([
  { path: '/', element: <Movies /> },
  { path: '/movie/:id', element: <MovieInformation /> },
  { path: '/actors/:id', element: <Actors /> },
  { path: '/profile/:id', element: <Profile /> },
]);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <RouterProvider router={router} />
        </div>
      </main>
    </div>
  );
};

export default App;
