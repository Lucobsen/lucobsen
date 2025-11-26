import { Box, Container, Stack, Typography } from "@mui/material";

const App = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        sx={{
          backgroundImage: "url(luke_wide.jpeg)",
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "right",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          height="100%"
          alignItems="center"
          justifyContent='center'>
          <Typography
            variant="h1"
            fontFamily="Limelight"
          >
            Luke Jacobsen
          </Typography>
          <Typography
            variant="h3"
            fontFamily="Limelight"
          >
            Coming soon...
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default App;
