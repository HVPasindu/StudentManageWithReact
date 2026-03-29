import "./Login.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function validate(email, password) {
    if (email.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Email is required",
        text: "Please enter your email address.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (password.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Password is required",
        text: "Please enter your password.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Weak password",
        text: "Password must be at least 6 characters long.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    return true;
  }

  const login = async () => {
    const isValid = validate(email, password);
    if (!isValid) return;

    try {
      const response = await axios.post("https://student-api.acpt.lk/api/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      await Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        confirmButtonColor: "#7b2cbf",
      });

      navigate("/students");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Email or password is incorrect.",
        confirmButtonColor: "#7b2cbf",
      });
    }
  };

  return (
    <div>
      <div className="login_container">
        <div className="left_side">
          <Card className="login_card" sx={{ margin: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                color: "#8320dfff",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              Login
            </Typography>

            <CardContent>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <br /><br /><br />

              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />

              <br /><br />

              <NavLink to="/register" className="form_link">
                You haven't an account? Sign Up
              </NavLink>

              <div className="btn_group">
                <Button
                  sx={{ mt: 2 }}
                  className="login_btn"
                  variant="contained"
                  color="success"
                  onClick={login}
                >
                  Login
                </Button>

                <Button
                  sx={{ mt: 2 }}
                  className="back_btn"
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="background right_div"></div>
      </div>
    </div>
  );
}