import { createTheme, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
