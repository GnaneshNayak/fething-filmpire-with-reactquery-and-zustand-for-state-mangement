// import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// import { styled } from '@mui/system';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
    // backgroundColor: 'red',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    width: '100%',
    // backgroundColor: 'black',
  },
}));
