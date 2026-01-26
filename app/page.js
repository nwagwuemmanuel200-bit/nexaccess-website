export default function HomePage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
      
      {/* HERO SECTION */}
      <section style={{ marginBottom: "80px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "16px" }}>
          NexAccess Global System
        </h1>
        <p style={{ fontSize: "18px", color: "#555", maxWidth: "700px" }}>
          Unified access control, payments, and smart infrastructure solutions
          for banks, hospitals, malls, and enterprise facilities in Nigeria.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="#solutions"
            style={{
              padding: "12px 24px",
              background: "#000",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              marginRight: "12px"
            }}
          >
            Our Solutions
          </a>

          <a
            href="#contact"
            style={{
              padding: "12px 24px",
              border: "1px solid #000",
              borderRadius: "6px",
              textDecoration: "none",
              color: "#000"
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Core Solutions
        </h2>

        <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          
          <div style={cardStyle}>
            <h3>Access Control Systems</h3>
            <p>
              Smart gates, LPR systems, biometric access, and centralized
              monitoring for secure facilities.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Contactless Payments</h3>
            <p>
              EMV-compliant POS, NFC tap-to-pay, and enterprise payment
              integrations for regulated environments.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Smart Parking & Mobility</h3>
            <p>
              Automated parking access, payment reconciliation, and traffic
              analytics for large facilities.
            </p>
          </div>

        </div>
      </section>

      {/* SECTORS SECTION */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Industries We Serve
        </h2>
        <ul style={{ fontSize: "18px", color: "#555" }}>
          <li>Banks & Financial Institutions</li>
          <li>Hospitals & Healthcare Facilities</li>
          <li>Shopping Malls & Commercial Complexes</li>
          <li>Government & Enterprise Campuses</li>
        </ul>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          Contact NexAccess
        </h2>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Let’s discuss deployment, partnerships, or pilot programs.
        </p>

        <p style={{ marginTop: "10px" }}>
          📧 Email: <strong>info@nexaccesssystems.com</strong><br />
          📍 Nigeria
        </p>
      </section>

    </main>
  );
}

const cardStyle = {
  border: "1px solid #e5e5e5",
  borderRadius: "10px",
  padding: "24px",
  background: "#fafafa"
};
