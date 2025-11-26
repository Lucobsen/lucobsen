import { Box, Container, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { ScreenSizeContext } from './utils/screen-size-context';

const App = () => {
  const { isSmallScreen } = useContext(ScreenSizeContext);

  return (
    <Container disableGutters maxWidth={false}>
      <Box
        sx={{
          backgroundImage: 'url(luke_wide.jpeg)',
          width: '100%',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Stack height="100%" alignItems="center" justifyContent="center">
          <Typography
            variant={isSmallScreen ? 'h4' : 'h1'}
            fontFamily="Limelight"
            sx={{ textShadow: '1px 1px 2px black' }}
          >
            Luke Jacobsen
          </Typography>
          <Typography
            variant={isSmallScreen ? 'h5' : 'h3'}
            fontFamily="Limelight"
            sx={{ textShadow: '1px 1px 2px black' }}
          >
            Coming soon...
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default App;
