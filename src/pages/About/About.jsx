import "./About.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="about_desktop">
      <div className="about_main_window win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">A</span>
            <span>StudentHub - About</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn">_</span>
            <span className="win-titlebar-btn">&#9633;</span>
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="win-menubar">
          <Link to="/" className="win-menu-item">File</Link>
          <span className="win-menu-item">Edit</span>
          <span className="win-menu-item">View</span>
          <Link to="/" className="win-menu-item">Home</Link>
          <Link to="/contact" className="win-menu-item">Contact</Link>
          <span className="win-menu-item">Help</span>
        </div>

        {/* Toolbar */}
        <div className="win-panel-raised about_toolbar">
          <Link to="/" className="win-btn">&#9664; Back</Link>
          <Link to="/" className="win-btn">Home</Link>
          <Link to="/contact" className="win-btn">Contact</Link>
          <div className="home_toolbar_sep"></div>
          <Link to="/login" className="win-btn primary">Login</Link>
        </div>

        {/* Content */}
        <div className="about_content">
          {/* Header bar */}
          <div className="about_header_bar">
            <div className="about_header_icon">[A]</div>
            <div>
              <div className="about_header_title">About StudentHub</div>
              <div className="about_header_sub">A modern student management platform</div>
            </div>
          </div>

          <hr className="win-separator" style={{ margin: "0 12px" }} />

          <div className="about_body">
            {/* Cards Row */}
            <div className="about_cards_row">
              <div className="win-window about_card">
                <div className="win-titlebar" style={{ fontSize: "10px", padding: "3px 6px" }}>
                  <span>Our Mission</span>
                </div>
                <div className="about_card_body">
                  To create a simple and useful system for managing student
                  information effectively and without confusion.
                </div>
              </div>

              <div className="win-window about_card">
                <div className="win-titlebar" style={{ fontSize: "10px", padding: "3px 6px" }}>
                  <span>Our Vision</span>
                </div>
                <div className="about_card_body">
                  To provide schools and institutes with a digital solution
                  that saves time and improves productivity.
                </div>
              </div>

              <div className="win-window about_card">
                <div className="win-titlebar" style={{ fontSize: "10px", padding: "3px 6px" }}>
                  <span>Our Values</span>
                </div>
                <div className="about_card_body">
                  Simplicity, reliability, user-friendliness, and clean design
                  are the core values behind this project.
                </div>
              </div>
            </div>

            {/* Why Section */}
            <div className="win-group-box about_why_box">
              <span className="win-group-label">Why This Project?</span>
              <p className="about_why_text">
                StudentHub is built to help users work with student records through a
                professional and responsive interface. It gives a better experience
                for handling registration, login, and future student-related features.
              </p>
              <div style={{ marginTop: "12px" }}>
                <Link to="/contact" className="win-btn primary">Contact Us</Link>
              </div>
            </div>

            {/* Info Table */}
            <div className="win-group-box" style={{ marginTop: "12px" }}>
              <span className="win-group-label">Project Details</span>
              <table className="win-table" style={{ marginTop: "6px" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "140px", fontWeight: "bold" }}>Project Name</td>
                    <td>StudentHub</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Version</td>
                    <td>1.0.0</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Platform</td>
                    <td>Web Application</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Technology</td>
                    <td>React.js</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>License</td>
                    <td>Open Source</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-item">About - StudentHub</div>
          <div className="win-statusbar-item">Version 1.0.0</div>
          <div className="win-statusbar-item">Ready</div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="win-taskbar">
        <button className="win-start-btn">
          <span style={{ fontStyle: "italic" }}>Start</span>
        </button>
        <div className="win-taskbar-separator"></div>
        <div className="win-taskbar-task">
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>A</span>
          StudentHub - About
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
