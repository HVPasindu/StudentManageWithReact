import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
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
  IconButton,
  Drawer,
} from "@mui/material";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
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
            StudentHub
          </Typography>

          {/* Desktop Menu */}
          <Box
            className="nav_links"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/about" className="nav_link">About</Link>
            <Link to="/contact" className="nav_link">Contact</Link>
            <Link to="/login" className="nav_btn_link">
              <Button variant="contained" color="success">
                Login
              </Button>
            </Link>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6a1b9a" }}>
            StudentHub
          </Typography>

          <Link
            to="/"
            className="nav_link"
            onClick={() => setOpenDrawer(false)}
            style={{ color: "#6a1b9a" }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="nav_link"
            onClick={() => setOpenDrawer(false)}
            style={{ color: "#6a1b9a" }}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="nav_link"
            onClick={() => setOpenDrawer(false)}
            style={{ color: "#6a1b9a" }}
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="nav_btn_link"
            onClick={() => setOpenDrawer(false)}
          >
            <Button variant="contained" color="success" fullWidth>
              Login
            </Button>
          </Link>
        </Box>
      </Drawer>

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
                Welcome to StudentHub. This system helps you manage student
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
                Why Choose StudentHub?
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                StudentHub is built for simplicity. It helps schools,
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
        <Typography>© 2026 StudentHub | All Rights Reserved</Typography>
      </Box>
    </div>
  );
}