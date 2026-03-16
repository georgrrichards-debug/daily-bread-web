export default function Home() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem", fontFamily: "system-ui", textAlign: "center" }}>
      <h1>Daily Bread</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>Bible Reading + Accountability</p>
      
      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <p>Download on the App Store</p>
        <a href="https://apps.apple.com" style={{ color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}>
          Daily Bread — Bible Habit
        </a>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#999" }}>
        <p>
          <a href="/privacy" style={{ color: "#0066cc", marginRight: "1rem" }}>Privacy Policy</a>
          <a href="/terms" style={{ color: "#0066cc" }}>Terms of Service</a>
        </p>
      </div>
    </div>
  );
}
