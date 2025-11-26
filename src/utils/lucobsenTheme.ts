import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 800,
      sm: 1000,
      md: 1200,
      lg: 1500,
      xl: 1800,
    },
  },
  typography: {
    fontFamily: ['Limelight', 'sans-serif', 'system-ui'].join(','),
  },
});
