import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#008080",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "34px",
    }}>
      <div className="win-window" style={{ width: "420px" }}>
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">!</span>
            <span>Error - Page Not Found</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        <div style={{ padding: "20px 24px", background: "var(--win-bg)" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "16px" }}>
            <div style={{
              width: "48px",
              height: "48px",
              background: "#cc0000",
              color: "#fff",
              fontSize: "28px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTop: "2px solid #ff4444",
              borderLeft: "2px solid #ff4444",
              borderRight: "2px solid #880000",
              borderBottom: "2px solid #880000",
              flexShrink: 0,
            }}>!</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "8px" }}>
                404 - Page Not Found
              </div>
              <div style={{ fontSize: "11px", lineHeight: "1.6", color: "#333" }}>
                The page you are looking for does not exist or has been moved.
                Please check the address and try again.
              </div>
            </div>
          </div>

          <hr className="win-separator" />

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px", marginTop: "12px" }}>
            <Link to="/" className="win-btn primary">Go to Home</Link>
          </div>
        </div>

        <div className="win-statusbar">
          <div className="win-statusbar-item">Error 404</div>
        </div>
      </div>
    </div>
  );
}
