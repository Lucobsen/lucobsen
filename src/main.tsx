import { ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { theme } from './utils/lucobsenTheme.ts';
import { ScreenSizeContextProvider } from './utils/screen-size-context-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ScreenSizeContextProvider>
        <App />
      </ScreenSizeContextProvider>
    </ThemeProvider>
  </StrictMode>
);
