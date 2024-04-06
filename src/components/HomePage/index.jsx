import { Box, Container } from "@mui/material";

function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <h2>Maybe some images or something here</h2>
      </Box>
    </Container>
  );
}

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
