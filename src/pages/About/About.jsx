import "./About.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{ background: "linear-gradient(90deg, #7b2cbf, #9d4edd)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            StudentHub
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Link to="/" className="top_link">Home</Link>
            <Link to="/contact" className="top_link">Contact</Link>
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

      {/* Mobile Drawer */}
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
            className="top_link"
            onClick={() => setOpenDrawer(false)}
            style={{ color: "#6a1b9a" }}
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="top_link"
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

      <Box className="about_hero">
        <Container>
          <Typography variant="h3" className="about_title">
            About StudentHub
          </Typography>
          <Typography className="about_subtitle">
            A modern student management platform designed to make educational
            administration easy, fast, and organized.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="about_card">
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Our Mission
                </Typography>
                <Typography>
                  To create a simple and useful system for managing student
                  information effectively.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="about_card">
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Our Vision
                </Typography>
                <Typography>
                  To provide schools and institutes with a digital solution that
                  saves time and improves productivity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="about_card">
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Our Values
                </Typography>
                <Typography>
                  Simplicity, reliability, user-friendliness, and clean design
                  are the core values behind this project.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className="about_bottom_box">
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Why This Project?
          </Typography>
          <Typography sx={{ lineHeight: 1.9, mb: 3 }}>
            StudentHub is built to help users work with student records through a
            professional and responsive interface. It gives a better experience
            for handling registration, login, and future student-related
            features.
          </Typography>

          <Link to="/contact" className="about_btn_link">
            <Button variant="contained" color="secondary">
              Contact Us
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
}