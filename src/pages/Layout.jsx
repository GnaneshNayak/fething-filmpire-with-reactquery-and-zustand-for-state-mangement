import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import useStyle from './Styles';
const Layout = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <div className={classes.allMovies}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
