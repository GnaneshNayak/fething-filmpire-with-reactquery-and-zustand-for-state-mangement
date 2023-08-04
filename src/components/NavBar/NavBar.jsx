import {
  AccountCircle,
  Brightness4,
  Brightness7,
  Menu,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useStyles from './Styles';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from '..';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              sx={{ outline: 'none' }}
              onClick={() => ''}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search.....'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit">
                {' '}
                Login &nbsp;
                <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                // component={}
                // to={`/profile/:id`}
                className={classes.linkButton}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </div>
          {isMobile && 'Search.....'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;

// <div>
//   <nav className={classes.drawer}>
//     {isMobile ? (
//       <Drawer
//         variant="temporary"
//         anchor="right"
//         open={mobileOpen}
//         classes={{ paper: classes.drawerPaper }}
//         ModalProps={{ keepMounted: true }}
//       >
//         <Sidebar setMobileOpen={setMobileOpen} />
//       </Drawer>
//     ) : (
//       <Drawer
//         classes={{ paper: classes.drawerPaper }}
//         variant="parmanent"
//         open
//       >
//         <Sidebar setMobileOpen={setMobileOpen} />
//       </Drawer>
//     )}
//   </nav>
// </div>;
