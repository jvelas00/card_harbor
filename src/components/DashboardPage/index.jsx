import { Box, Container } from "@mui/material";

function Dashboard() {
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
        <h2>The meaty part of the website</h2>
      </Box>
    </Container>
  );
}

export default function DashboardPage() {
  return (
    <>
      <Dashboard />
    </>
  );
}
