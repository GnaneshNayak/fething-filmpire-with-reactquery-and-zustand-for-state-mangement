import { Box, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import routes from '../Routes';
import useStyles from './styles.js';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box padding={1}>
          <RouterProvider router={routes} />
        </Box>
      </main>
    </div>
  );
};

export default App;
