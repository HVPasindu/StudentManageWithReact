import "./Home.css";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #7b2cbf, #9d4edd)",
          boxShadow: 3,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            EduManage
          </Typography>

          <Box className="nav_links">
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/about" className="nav_link">About</Link>
            <Link to="/contact" className="nav_link">Contact</Link>
            <Link to="/login" className="nav_btn_link">
              <Button variant="contained" color="success">
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Box className="hero_section">
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#6a1b9a",
                  mb: 2,
                }}
              >
                Manage Students Easily and Smartly
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#444",
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                Welcome to EduManage. This system helps you manage student
                details, registration, and records in a simple, modern, and
                user-friendly way.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Link to="/login" className="hero_btn_link">
                  <Button variant="contained" color="success" size="large">
                    Get Started
                  </Button>
                </Link>

                <Link to="/register" className="hero_btn_link">
                  <Button variant="outlined" color="secondary" size="large">
                    Sign Up
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src="/home.png"
                alt="home"
                className="hero_image"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FEATURES */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", color: "#6a1b9a", mb: 5 }}
        >
          Our Features
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="feature_card">
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Student Management
                </Typography>
                <Typography>
                  Add, update, and manage student information quickly and
                  easily.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="feature_card">
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Secure Login
                </Typography>
                <Typography>
                  Authentication system with register and login functionality
                  for users.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="feature_card">
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Simple Interface
                </Typography>
                <Typography>
                  Clean and responsive design that works nicely on desktop and
                  mobile devices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* ABOUT PREVIEW */}
      <Box className="about_preview">
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Why Choose EduManage?
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                EduManage is built for simplicity. It helps schools,
                institutions, or student management systems keep records clean,
                organized, and accessible with a modern interface.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className="info_card">
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Quick Highlights
                  </Typography>
                  <Typography sx={{ mb: 1 }}>✔ Easy student registration</Typography>
                  <Typography sx={{ mb: 1 }}>✔ Secure user login</Typography>
                  <Typography sx={{ mb: 1 }}>✔ Responsive mobile design</Typography>
                  <Typography>✔ Modern and clean UI</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box className="footer_section">
        <Typography>© 2026 EduManage | All Rights Reserved</Typography>
      </Box>
    </div>
  );
}