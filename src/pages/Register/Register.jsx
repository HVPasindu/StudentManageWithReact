import "./Register.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function validate(name, email, password, confirmPassword) {
    if (name.trim() === "") {
      Swal.fire({ icon: "warning", title: "Name is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (email.trim() === "") {
      Swal.fire({ icon: "warning", title: "Email is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({ icon: "error", title: "Invalid email", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (password.trim() === "") {
      Swal.fire({ icon: "warning", title: "Password is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (password.length < 6) {
      Swal.fire({ icon: "error", title: "Weak password", text: "At least 6 characters.", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (confirmPassword.trim() === "") {
      Swal.fire({ icon: "warning", title: "Confirm password is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (password !== confirmPassword) {
      Swal.fire({ icon: "error", title: "Passwords do not match", confirmButtonColor: "#0a246a" });
      return false;
    }
    return true;
  }

  async function handleRegister() {
    const isValid = validate(name, email, password, confirmPassword);
    if (!isValid) return;
    try {
      await axios.post("https://student-api.acpt.lk/api/register", { name, email, password });
      await Swal.fire({ icon: "success", title: "Register Successful", text: "Your account has been created.", confirmButtonColor: "#0a246a" });
      navigate("/login");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Register Failed", text: "Something went wrong. Please try again.", confirmButtonColor: "#0a246a" });
    }
  }

  return (
    <div className="register_desktop">
      {/* Register Dialog Window */}
      <div className="register_dialog win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">R</span>
            <span>StudentHub - Create New Account</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        {/* Dialog Body */}
        <div className="register_dialog_body">
          {/* Logo Panel */}
          <div className="register_logo_panel win-panel">
            <div className="register_logo_icon">S</div>
            <div className="register_logo_appname">StudentHub</div>
            <div className="register_logo_version">Version 1.0</div>
            <hr className="win-separator" />
            <div className="register_logo_tagline">New User Registration</div>
          </div>

          {/* Form */}
          <div className="register_form_panel">
            <div className="register_form_title">Create a New Account</div>
            <hr className="win-separator" />

            <div className="win-form-field">
              <label className="win-label" htmlFor="reg_name">Full Name:</label>
              <input
                id="reg_name"
                className="win-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="reg_email">Email Address:</label>
              <input
                id="reg_email"
                className="win-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="reg_password">Password:</label>
              <input
                id="reg_password"
                className="win-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="reg_confirm">Confirm Password:</label>
              <input
                id="reg_confirm"
                className="win-input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
              />
            </div>

            <div className="register_form_link_row">
              <NavLink to="/login" className="win-link">
                Already have an account? Login
              </NavLink>
            </div>

            <hr className="win-separator" />

            <div className="register_form_btns">
              <button className="win-btn primary" onClick={handleRegister}>Register</button>
              <button className="win-btn" onClick={() => navigate("/")}>Cancel</button>
            </div>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="win-taskbar">
        <button className="win-start-btn">
          <span style={{ fontStyle: "italic" }}>Start</span>
        </button>
        <div className="win-taskbar-separator"></div>
        <div className="win-taskbar-task">
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>R</span>
          Create New Account
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
