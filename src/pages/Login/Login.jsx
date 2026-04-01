import "./Login.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  function validate(email, password) {
    if (email.trim() === "") {
      Swal.fire({ icon: "warning", title: "Email is required", text: "Please enter your email address.", confirmButtonColor: "#0a246a" });
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({ icon: "error", title: "Invalid email", text: "Please enter a valid email address.", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (password.trim() === "") {
      Swal.fire({ icon: "warning", title: "Password is required", text: "Please enter your password.", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (password.length < 6) {
      Swal.fire({ icon: "error", title: "Weak password", text: "Password must be at least 6 characters long.", confirmButtonColor: "#0a246a" });
      return false;
    }
    return true;
  }

  const login = async () => {
    const isValid = validate(email, password);
    if (!isValid) return;
    try {
      const response = await axios.post("https://student-api.acpt.lk/api/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      await Swal.fire({ icon: "success", title: "Login Successful", text: "Welcome back!", confirmButtonColor: "#0a246a" });
      navigate("/students");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Login Failed", text: "Email or password is incorrect.", confirmButtonColor: "#0a246a" });
    }
  };

  return (
    <div className="login_desktop">
      {/* Desktop icons */}
      <div className="login_desktop_icons">
        <div className="login_desktop_icon">
          <div className="login_desktop_icon_img">[S]</div>
          <div className="login_desktop_icon_label">StudentHub</div>
        </div>
        <div className="login_desktop_icon">
          <div className="login_desktop_icon_img">[?]</div>
          <div className="login_desktop_icon_label">Help</div>
        </div>
      </div>

      {/* Login Dialog Window */}
      <div className="login_dialog win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">L</span>
            <span>StudentHub Login</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        {/* Dialog Body */}
        <div className="login_dialog_body">
          {/* Left: Logo panel */}
          <div className="login_logo_panel win-panel">
            <div className="login_logo_icon">S</div>
            <div className="login_logo_appname">StudentHub</div>
            <div className="login_logo_version">Version 1.0</div>
            <hr className="win-separator" />
            <div className="login_logo_tagline">
              Student Management System
            </div>
          </div>

          {/* Right: Form */}
          <div className="login_form_panel">
            <div className="login_form_title">Log On to StudentHub</div>
            <hr className="win-separator" />

            <div className="win-form-field">
              <label className="win-label" htmlFor="login_email">User name:</label>
              <input
                id="login_email"
                className="win-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="login_password">Password:</label>
              <input
                id="login_password"
                className="win-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                onKeyDown={(e) => e.key === "Enter" && login()}
              />
            </div>

            <div className="login_form_link_row">
              <NavLink to="/register" className="win-link">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </div>

            <hr className="win-separator" />

            <div className="login_form_btns">
              <button className="win-btn primary" onClick={login}>OK</button>
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
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>L</span>
          StudentHub Login
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
