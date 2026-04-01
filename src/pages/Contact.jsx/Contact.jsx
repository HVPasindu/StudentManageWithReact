import "./Contact.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
    <div className="contact_desktop">
      <div className="contact_main_window win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">C</span>
            <span>StudentHub - Contact Us</span>
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
          <Link to="/about" className="win-menu-item">About</Link>
          <span className="win-menu-item">Help</span>
        </div>

        {/* Toolbar */}
        <div className="win-panel-raised contact_toolbar">
          <Link to="/" className="win-btn">&#9664; Back</Link>
          <Link to="/" className="win-btn">Home</Link>
          <Link to="/about" className="win-btn">About</Link>
          <div className="contact_toolbar_sep"></div>
          <Link to="/login" className="win-btn primary">Login</Link>
          <Link to="/register" className="win-btn">Register</Link>
        </div>

        {/* Header */}
        <div className="contact_header_bar">
          <div className="contact_header_icon">[C]</div>
          <div>
            <div className="contact_header_title">Contact Us</div>
            <div className="contact_header_sub">We are here to help you</div>
          </div>
        </div>

        <hr className="win-separator" style={{ margin: "0 12px" }} />

        {/* Body */}
        <div className="contact_body">
          {/* Contact Info Cards */}
          <div className="contact_cards_row">
            <div className="win-window contact_card">
              <div className="win-titlebar" style={{ fontSize: "10px", padding: "3px 6px" }}>
                <span>Email</span>
              </div>
              <div className="contact_card_body">
                <div className="contact_card_value">support@studenthub.com</div>
                <div className="contact_card_note">For general questions and support</div>
              </div>
            </div>

            <div className="win-window contact_card">
              <div className="win-titlebar" style={{ fontSize: "10px", padding: "3px 6px" }}>
                <span>Phone</span>
              </div>
              <div className="contact_card_body">
                <div className="contact_card_value">+94 71 234 5678</div>
                <div className="contact_card_note">Call us during working hours</div>
              </div>
            </div>

            <div className="win-window contact_card">
              <div className="win-titlebar" style={{ fontSize: "10px", padding: "3px 6px" }}>
                <span>Address</span>
              </div>
              <div className="contact_card_body">
                <div className="contact_card_value">Colombo, Sri Lanka</div>
                <div className="contact_card_note">Main office location</div>
              </div>
            </div>
          </div>

          {/* Office Hours + Quick Actions */}
          <div className="contact_bottom_row">
            <div className="win-group-box contact_hours_box">
              <span className="win-group-label">Office Hours</span>
              <table className="win-table" style={{ marginTop: "6px" }}>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Monday - Friday</td>
                    <td>8:30 AM - 5:00 PM</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Saturday</td>
                    <td>9:00 AM - 1:00 PM</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Sunday</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="win-group-box contact_actions_box">
              <span className="win-group-label">Quick Actions</span>
              <div className="contact_action_btns">
                <Link to="/login" className="win-btn primary">Go to Login</Link>
                <Link to="/register" className="win-btn">Create Account</Link>
                <Link to="/" className="win-btn">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-item">Contact - StudentHub</div>
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
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>C</span>
          StudentHub - Contact
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
