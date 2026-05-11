import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

import { useContext } from 'react';
import { ScreenSizeContext } from '../../utils/screen-size-context';
import { HomeSection } from './HomeSection/HomeSection';

export const HomePage = () => {
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
          <Stack
            sx={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant={isSmallScreen ? 'h4' : 'h1'}
              sx={{
                textShadow: '1px 1px 2px black',
                fontFamily: 'Limelight',
                color: '#fff',
              }}
            >
              Luke Jacobsen
            </Typography>
          </Stack>
        </Box>

        {/* TODO: add hobbies and interests & socials */}
        <Stack
          sx={{
            textAlign: 'center',
            gap: 6,
            justifySelf: 'center',
            width: '85%',
            maxWidth: 1200,
            margin: '80px 0',
          }}
        >
          <Grid container sx={{ rowGap: isMediumScreen ? 1 : 0 }}>
            <Grid
              size={{ md: 3, sm: 6, xs: 12 }}
              sx={{ borderRight: isSmallScreen ? 0 : 1, borderColor: '#fff' }}
            >
              <Typography variant="h4">Dancer</Typography>
            </Grid>

            <Grid
              size={{ md: 3, sm: 6, xs: 12 }}
              sx={{ borderRight: isMediumScreen ? 0 : 1, borderColor: '#fff' }}
            >
              <Typography variant="h4">Developer</Typography>
            </Grid>

            <Grid
              size={{ md: 3, sm: 6, xs: 12 }}
              sx={{ borderRight: isSmallScreen ? 0 : 1, borderColor: '#fff' }}
            >
              <Typography variant="h4">Musician</Typography>
            </Grid>

            <Grid size={{ md: 3, sm: 6, xs: 12 }}>
              <Typography variant="h4">Photographer</Typography>
            </Grid>
          </Grid>

          {/* TODO: my past, hobbies & interests */}
          <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
            Hi, my name is Luke, nerd by day, dancer by night!<br></br>I was
            born and raised in Ireland, before moving to the Netherlands in
            2021. For years I have worked developing my skills as a Web
            Developer, Amateur Photographer, Salsa Dancer, and Musician.
          </Typography>
        </Stack>

        {/* TODO: add dancing videos, pictures, more info about schools I teach at, private class info, testimonials */}
        <HomeSection title="Dancer">
          <>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              I started dancing salsa when I moved to Amsterdam, over four years
              ago. Practcing for long hours at salsa school (Extremos) or in my
              own time, I slowly improved and began to develop more confidence
              in my dancing.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              I danced in some shows and helped out as an Ambassador at
              Extremos, further growing my knowledge of salsa. In time, I took
              on the roles of Teacher at two schools, Extremos and Lumos.
              Through many classes and workshops I began to improve at one thing
              that you cannot learn in class or on the dancefloor; I began to
              improve as a teacher.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              By identifying the needs and wants of my students and listening as
              well as watching, I am able to impart my knowedlge onto my
              students in a comprehensable and fun format.
            </Typography>
          </>
        </HomeSection>

        {/* TODO: add personal projects and work projects */}
        <HomeSection title="Developer">
          <>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              I studied at the National University of Ireland, Galway,
              graduating with a Bachelors in Computer Science & Information
              Technology. Having already months of work experience from my
              intership, I walked into my first job after graduating at a
              company called Brightwork.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              Working for three years as a Fronted Developer at Brightwork, I
              developed many skills in a variety of technologies. From Frontend
              Frameworks like Aurelia, Angular and React, to Design Principles
              and Ways of Working.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              After working in Ireland for those initial three years, I set my
              sights on moving abroad to learn and sicovery new things. In the
              Autumn of 2021, I moved to Amsterdam. Not long after moving, I
              settled into a position as a Frontend Web Developer at the
              Amsterdam Airport, Schiphol, where I have worked ever since.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              In my spare time, I also build and manage websites for other
              smaller businesses and my friends, such as{' '}
              {<Link href="https://www.lumoslatin.nl/">LUMOS</Link>} and this
              site itself.
            </Typography>
          </>
        </HomeSection>

        {/* TODO: Links to my music, photos of me performing, guitar lessons, instruments I can play, testimonials */}
        <HomeSection title="Musician">
          <>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              I have been singing and playing music for as long as I can
              remember. From a young age I sang in school plays and in more high
              end productions with the stage school I attended.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              In secondary school I started to learn how to play the guitar so I
              could have some accompaniment when I sang. This led me to joining
              many bands later when I went to college. Once of which was my own
              band called SCRAM. We played a number of gigs and even made some
              amateur recordings.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              When COVID hit I started to write some songs with just my acoustic
              guitar. Once I moved to the Netherlands I then set about playing
              these songs at some small Open-Mic nights. Eventually I recorded
              three of these songs.
            </Typography>
          </>
        </HomeSection>

        {/* TODO: Photo albums */}
        <HomeSection title="Photographer">
          <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
            I like to take my camera with me wherever and I and do my best to
            capture as much of the worlds beauty as I can. With every photo my
            skills as a photographer get better and better.
          </Typography>
        </HomeSection>
      </Container>

      <footer>
        <Stack
          sx={{
            background: 'linear-gradient(340deg, #002A4F 0%, #02BD7C 100%)',
            padding: ({ spacing }) => spacing(isSmallScreen ? 5 : 10),
            gap: ({ spacing }) => spacing(isSmallScreen ? 6 : 10),
            position: 'sticky',
            bottom: 0,
            left: 0,
            height: 'fit-content',
            justifyContent: 'center',
          }}
          direction={isSmallScreen ? 'column' : 'row'}
        >
          <Box
            component="img"
            src="luke_face.jpeg"
            width={isSmallScreen ? '100%' : '300px'}
            height={isSmallScreen ? '400px' : '100%'}
          ></Box>

          <Stack>
            <Typography variant="h4">Contact Info</Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              Email Address
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              Instagram
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="h4">Useful Links</Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              Dancing
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              Music
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              Photography
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Instrument Sans' }}>
              Web Development
            </Typography>
          </Stack>
        </Stack>
      </footer>
    </>
  );
};
