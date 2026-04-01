import "./Home.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <div className="home_desktop">
      {/* ===== MAIN WINDOW ===== */}
      <div className="home_main_window win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">S</span>
            <span>StudentHub - Home</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn">_</span>
            <span className="win-titlebar-btn">&#9633;</span>
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="win-menubar">
          <span className="win-menu-item">File</span>
          <span className="win-menu-item">Edit</span>
          <span className="win-menu-item">View</span>
          <Link to="/about" className="win-menu-item">About</Link>
          <Link to="/contact" className="win-menu-item">Contact</Link>
          <span className="win-menu-item">Help</span>
        </div>

        {/* Toolbar Strip */}
        <div className="home_toolbar win-panel-raised">
          <Link to="/" className="win-btn" style={{ fontSize: "11px" }}>Home</Link>
          <Link to="/about" className="win-btn" style={{ fontSize: "11px" }}>About</Link>
          <Link to="/contact" className="win-btn" style={{ fontSize: "11px" }}>Contact</Link>
          <div className="home_toolbar_sep"></div>
          <Link to="/login" className="win-btn primary" style={{ fontSize: "11px" }}>Login</Link>
          <Link to="/register" className="win-btn" style={{ fontSize: "11px" }}>Register</Link>
        </div>

        {/* Main Content Area */}
        <div className="home_content_area">
          {/* Sidebar */}
          <div className="home_sidebar win-panel">
            <div className="home_sidebar_section">
              <div className="home_sidebar_title">Navigation</div>
              <Link to="/" className="home_sidebar_link active">Home</Link>
              <Link to="/about" className="home_sidebar_link">About</Link>
              <Link to="/contact" className="home_sidebar_link">Contact</Link>
              <hr className="win-separator" />
              <Link to="/login" className="home_sidebar_link">Login</Link>
              <Link to="/register" className="home_sidebar_link">Register</Link>
              <Link to="/students" className="home_sidebar_link">Students</Link>
            </div>

            <hr className="win-separator" />

            <div className="home_sidebar_section">
              <div className="home_sidebar_title">System Info</div>
              <div className="home_sidebar_info">Version: 1.0.0</div>
              <div className="home_sidebar_info">Build: 2000</div>
              <div className="home_sidebar_info">User: Guest</div>
            </div>
          </div>

          {/* Main Panel */}
          <div className="home_main_panel">
            {/* Hero Group Box */}
            <div className="win-group-box">
              <span className="win-group-label">Welcome to StudentHub</span>
              <div className="home_hero_inner">
                <div className="home_hero_text">
                  <div className="home_hero_title">Manage Students Easily and Smartly</div>
                  <p className="home_hero_desc">
                    Welcome to StudentHub. This system helps you manage student
                    details, registration, and records in a simple, organized,
                    and user-friendly way.
                  </p>
                  <div className="home_hero_btns">
                    <Link to="/login" className="win-btn primary">Get Started</Link>
                    <Link to="/register" className="win-btn">Sign Up</Link>
                  </div>
                </div>
                <div className="home_hero_logo">
                  <div className="home_logo_box">
                    <div className="home_logo_icon">S</div>
                    <div className="home_logo_text">StudentHub</div>
                    <div className="home_logo_ver">v1.0</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: "12px" }} />

            {/* Features Group Box */}
            <div className="win-group-box">
              <span className="win-group-label">Features</span>
              <div className="home_features_grid">
                <div className="win-panel home_feature_item">
                  <div className="home_feature_icon">[M]</div>
                  <div className="home_feature_title">Student Management</div>
                  <div className="home_feature_desc">Add, update, and manage student information quickly and easily.</div>
                </div>
                <div className="win-panel home_feature_item">
                  <div className="home_feature_icon">[S]</div>
                  <div className="home_feature_title">Secure Login</div>
                  <div className="home_feature_desc">Authentication system with register and login functionality.</div>
                </div>
                <div className="win-panel home_feature_item">
                  <div className="home_feature_icon">[UI]</div>
                  <div className="home_feature_title">Simple Interface</div>
                  <div className="home_feature_desc">Clean design that works well on desktop and mobile devices.</div>
                </div>
              </div>
            </div>

            <div style={{ height: "12px" }} />

            {/* Why Choose Box */}
            <div className="win-group-box">
              <span className="win-group-label">Why Choose StudentHub?</span>
              <div className="home_why_grid">
                <p className="home_why_desc">
                  StudentHub is built for simplicity. It helps schools, institutions,
                  or student management systems keep records clean, organized, and
                  accessible.
                </p>
                <div className="win-panel home_highlights_panel">
                  <div className="home_highlights_title">Quick Highlights</div>
                  <div className="home_highlight_row">&#9658; Easy student registration</div>
                  <div className="home_highlight_row">&#9658; Secure user login</div>
                  <div className="home_highlight_row">&#9658; Responsive design</div>
                  <div className="home_highlight_row">&#9658; Modern and clean UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-item">Ready</div>
          <div className="win-statusbar-item">StudentHub v1.0</div>
          <div className="win-statusbar-item">© 2026 StudentHub</div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="win-taskbar">
        <button className="win-start-btn">
          <span style={{ fontStyle: "italic" }}>Start</span>
        </button>
        <div className="win-taskbar-separator"></div>
        <div className="win-taskbar-task">
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>S</span>
          StudentHub - Home
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
