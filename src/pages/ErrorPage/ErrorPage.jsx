import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold", color: "#7b2cbf" }}>
          404
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Page Not Found
        </Typography>

        <Typography sx={{ color: "#666", maxWidth: 500 }}>
          Sorry, the page you are looking for does not exist.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            mt: 2,
            background: "linear-gradient(90deg, #7b2cbf, #9d4edd)",
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}