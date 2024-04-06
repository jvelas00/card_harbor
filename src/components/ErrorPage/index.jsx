import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function ErrorPage() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box textAlign={"center"}>
          <Typography variant="h3" pb={3}>
            404: Page not found
          </Typography>
          <Typography variant="h5">
            Try starting at one of the links above
          </Typography>
        </Box>
      </Container>
    </>
  );
}
