import { createTheme, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({});
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
);

// https://decrypt.hashhackers.com/?code=4/0Adeu5BXIhhNyGg9zB6mLrxorrv891Yag3o3T1ijVvSGs29lG3m7aPrzeXb2lpbYaA386pw&scope=https://www.googleapis.com/auth/drive
