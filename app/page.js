export default function HomePage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #0B1F3A 0%, #1F4FD8 100%)",
          color: "white",
          padding: "100px 40px",
          borderRadius: "24px",
          marginBottom: "100px"
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "16px" }}>
          NexAccess Global System
        </h1>

        <p style={{ fontSize: "18px", color: "#E5E7EB", maxWidth: "700px" }}>
          Unified access control, payments, and smart infrastructure for banks,
          hospitals, malls, and enterprise campuses.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap"
          }}
        >
          <a
            href="#solutions"
            style={{
              padding: "14px 22px",
              background: "white",
              color: "#0B1F3A",
              borderRadius: "6px",
              fontWeight: 600
            }}
          >
            View Solutions
          </a>

          <a
            href="/investors"
            style={{
              padding: "14px 22px",
              border: "1px solid white",
              color: "white",
              borderRadius: "6px",
              fontWeight: 600
            }}
          >
            Investor Overview
          </a>

          <a
            href="#contact"
            style={{
              padding: "14px 22px",
              border: "1px solid white",
              color: "white",
              borderRadius: "6px",
              fontWeight: 600
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ================= SOLUTIONS SECTION ================= */}
      <section id="solutions" style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>
          Core Solutions
        </h2>

        <div style={{ display: "grid", gap: "30px" }}>
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

      {/* ================= INDUSTRIES SECTION ================= */}
      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>
          Industries We Serve
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "1.8" }}>
          <li>Banks & Financial Institutions</li>
          <li>Hospitals & Healthcare Facilities</li>
          <li>Shopping Malls & Commercial Complexes</li>
          <li>Government & Enterprise Campuses</li>
        </ul>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          Contact NexAccess
        </h2>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Let’s discuss deployment, partnerships, or pilot programs.
        </p>

        <p style={{ marginTop: "16px", fontSize: "16px" }}>
          📧 Email: <strong>info@nexaccesssystems.com</strong>
          <br />
          📍 Nigeria
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={{ textAlign: "center", color: "#777", fontSize: "14px" }}>
        © 2026 NexAccess Global System
      </footer>

    </main>
  );
}

const cardStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "28px",
  background: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
};
