import "./Contact.css";
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
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{ background: "linear-gradient(90deg, #7b2cbf, #9d4edd)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            EduManage
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/" className="contact_top_link">Home</Link>
            <Link to="/about" className="contact_top_link">About</Link>
            <Link to="/login" className="contact_top_link">Login</Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box className="contact_hero">
        <Container>
          <Typography variant="h3" className="contact_title">
            Contact Us
          </Typography>
          <Typography className="contact_subtitle">
            We are here to help you. You can reach us through the details below.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="contact_card">
              <CardContent>
                <Typography variant="h5" className="card_title">
                  Email
                </Typography>
                <Typography className="card_text">
                  support@edumanage.com
                </Typography>
                <Typography className="card_subtext">
                  For general questions and support
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="contact_card">
              <CardContent>
                <Typography variant="h5" className="card_title">
                  Phone
                </Typography>
                <Typography className="card_text">
                  +94 71 234 5678
                </Typography>
                <Typography className="card_subtext">
                  Call us during working hours
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="contact_card">
              <CardContent>
                <Typography variant="h5" className="card_title">
                  Address
                </Typography>
                <Typography className="card_text">
                  Colombo, Sri Lanka
                </Typography>
                <Typography className="card_subtext">
                  Main office location
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className="contact_bottom_section">
          <Typography variant="h4" className="bottom_title">
            Office Hours
          </Typography>

          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Card className="contact_card">
                <CardContent>
                  <Typography className="hours_text">
                    Monday - Friday : 8.30 AM - 5.00 PM
                  </Typography>
                  <Typography className="hours_text">
                    Saturday : 9.00 AM - 1.00 PM
                  </Typography>
                  <Typography className="hours_text">
                    Sunday : Closed
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className="contact_card">
                <CardContent>
                  <Typography variant="h6" className="card_title" sx={{ mb: 2 }}>
                    Quick Actions
                  </Typography>

                  <Box className="quick_btns">
                    <Link to="/login" className="btn_link">
                      <Button variant="contained" color="secondary" fullWidth>
                        Go to Login
                      </Button>
                    </Link>

                    <Link to="/register" className="btn_link">
                      <Button variant="outlined" color="secondary" fullWidth>
                        Create Account
                      </Button>
                    </Link>

                    <Link to="/" className="btn_link">
                      <Button variant="text" color="secondary" fullWidth>
                        Back to Home
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}