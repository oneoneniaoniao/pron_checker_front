// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './routes/AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3ab54b',
      light: '#8cc73f',
      dark: '#006837',
    },
    secondary: { main: '#eab528' },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
