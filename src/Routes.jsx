import { createBrowserRouter } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile } from './components';
import Layout from './pages/Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Movies /> },
      { path: 'movie/:id', element: <MovieInformation /> },
      { path: 'actors/:id', element: <Actors /> },
      { path: 'profile/:id', element: <Profile /> },
    ],
  },
]);

export default routes;
