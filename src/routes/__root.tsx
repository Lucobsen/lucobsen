import { ThemeProvider, Typography } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { theme } from '../utils/lucobsenTheme';
import { ScreenSizeContextProvider } from '../utils/screen-size-context-provider';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <ScreenSizeContextProvider>
        <Outlet />
        <TanStackRouterDevtools />
      </ScreenSizeContextProvider>
    </ThemeProvider>
  ),
  notFoundComponent: () => (
    <Typography
      sx={{ fontFamily: 'Chau Philomene One', mb: 4, color: '#000' }}
      variant="h1"
      align="center"
    >
      Page not found!
    </Typography>
  ),
});
