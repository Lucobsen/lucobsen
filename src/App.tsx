import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { ScreenSizeContext } from './utils/screen-size-context';

const App = () => {
  const { isSmallScreen, isMediumScreen } = useContext(ScreenSizeContext);

  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ mb: 10 }}>
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
              color="#fff"
            >
              Luke Jacobsen
            </Typography>
          </Stack>
        </Box>

        <Stack
          my={10}
          textAlign="center"
          spacing={6}
          maxWidth={1200}
          justifySelf="center"
          width="85%"
        >
          <Grid container rowGap={isMediumScreen ? 1 : 0}>
            <Grid
              size={{ md: 3, sm: 6, xs: 12 }}
              borderRight={isSmallScreen ? 0 : 1}
              borderColor="#fff"
            >
              <Typography variant="h4">Dancer</Typography>
            </Grid>

            <Grid
              size={{ md: 3, sm: 6, xs: 12 }}
              borderRight={isMediumScreen ? 0 : 1}
              borderColor="#fff"
            >
              <Typography variant="h4">Developer</Typography>
            </Grid>

            <Grid
              size={{ md: 3, sm: 6, xs: 12 }}
              borderRight={isSmallScreen ? 0 : 1}
              borderColor="#fff"
            >
              <Typography variant="h4">Musician</Typography>
            </Grid>

            <Grid size={{ md: 3, sm: 6, xs: 12 }}>
              <Typography variant="h4">Photographer</Typography>
            </Grid>
          </Grid>

          <Typography variant="h5" fontFamily="Instrument Sans">
            Hi, my name is Luke, nerd by day, dancer by night!<br></br>I was
            born and raised in Ireland, before moving to the Netherlands in
            2021. For years I have worked developing my skills as a Web
            Developer, Amateur Photographer, Salsa Dancer, and Musician.
            <br></br>Now these skills are your's to make use of!
          </Typography>
        </Stack>
      </Container>

      <footer>
        <Stack
          position="sticky"
          bottom={0}
          left={0}
          height="fit-content"
          sx={{
            background: 'linear-gradient(340deg, #002A4F 0%, #02BD7C 100%)',
          }}
          padding={({ spacing }) => spacing(isSmallScreen ? 5 : 10)}
          direction={isSmallScreen ? 'column' : 'row'}
          spacing={isSmallScreen ? 6 : 10}
          justifyContent="center"
        >
          <Box
            component="img"
            src="luke_face.jpeg"
            width={isSmallScreen ? '100%' : '300px'}
            height={isSmallScreen ? '400px' : '100%'}
          ></Box>

          <Stack>
            <Typography variant="h4">Contact Info</Typography>
            <Typography variant="h5" fontFamily="Instrument Sans">
              Email Address
            </Typography>
            <Typography variant="h5" fontFamily="Instrument Sans">
              Instagram
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="h4">Useful Links</Typography>
            <Typography variant="h5" fontFamily="Instrument Sans">
              Dancing
            </Typography>
            <Typography variant="h5" fontFamily="Instrument Sans">
              Music
            </Typography>
            <Typography variant="h5" fontFamily="Instrument Sans">
              Photography
            </Typography>
            <Typography variant="h5" fontFamily="Instrument Sans">
              Web Development
            </Typography>
          </Stack>
        </Stack>
      </footer>
    </>
  );
};

export default App;
