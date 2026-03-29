import "./Register.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function validate(name, email, password, confirmPassword) {
    if (name.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Name is required",
        text: "Please enter your name.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

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

    if (confirmPassword.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Confirm password is required",
        text: "Please re-enter your password.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please check your password again.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    return true;
  }

  async function handleRegister() {
    const isValid = validate(name, email, password, confirmPassword);
    if (!isValid) return;

    try {
      await axios.post("https://student-api.acpt.lk/api/register", {
        name,
        email,
        password,
      });

      await Swal.fire({
        icon: "success",
        title: "Register Successful",
        text: "Your account has been created successfully.",
        confirmButtonColor: "#7b2cbf",
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#7b2cbf",
      });
    }
  }

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
              Register
            </Typography>

            <CardContent>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <br /><br /><br />

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

              <br /><br /><br />

              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />

              <br /><br />

              <NavLink to="/login" className="form_link">
                Already have an account? Login
              </NavLink>

              <div className="btn_group">
                <Button
                  variant="contained"
                  color="success"
                  className="login_btn"
                  onClick={handleRegister}
                >
                  Register
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  className="back_btn"
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