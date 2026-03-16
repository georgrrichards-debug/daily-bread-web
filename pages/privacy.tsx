export default function Privacy() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated: March 16, 2026</strong></p>
      
      <h2>1. Information We Collect</h2>
      <p>Daily Bread collects user information necessary to provide the service, including:</p>
      <ul>
        <li>Account credentials (email, username)</li>
        <li>Bible reading activity and streaks</li>
        <li>Group membership and friend connections</li>
        <li>Device information and app usage analytics</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide and maintain the Daily Bread service</li>
        <li>Track your Bible reading habits and streaks</li>
        <li>Enable group accountability features</li>
        <li>Improve the app through analytics</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>Daily Bread uses industry-standard security measures to protect your data. All sensitive information is encrypted in transit and at rest.</p>

      <h2>4. Third-Party Services</h2>
      <p>Daily Bread integrates with Supabase for backend services. Your data is processed according to Supabase's privacy policies.</p>

      <h2>5. Contact Us</h2>
      <p>For privacy concerns, contact: support@dailybreadapp.com</p>
    </div>
  );
}
