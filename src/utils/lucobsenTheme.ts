import { createTheme } from '@mui/material';

export const brandGradient =
  'linear-gradient(340deg, #717C89 0%, #90BAAD 100%)';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90BAAD',
      light: '#A1E5AB',
    },
    secondary: {
      main: '#8AA2A9',
    },
    background: {
      default: '#1A1E23',
      paper: '#242A31',
    },
    text: {
      primary: '#ADF6B1',
      secondary: '#8AA2A9',
    },
    divider: '#717C89',
  },
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
    fontFamily: [
      'Limelight',
      'Instrument Sans',
      'sans-serif',
      'system-ui',
    ].join(','),
  },
});
