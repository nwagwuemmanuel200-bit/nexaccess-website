export default function HomePage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
      
      {/* HERO SECTION */}
      <section
  style={{
    background: "linear-gradient(135deg, #0B1F3A 0%, #1F4FD8 100%)",
    color: "white",
    padding: "120px 40px",
    borderRadius: "24px",
    marginBottom: "100px"
  }}
>
        <h1 style={{ fontSize: "48px", fontWeight: 700, color: "white" }}>
  NexAccess Global System
</h1>

<p style={{ fontSize: "18px", color: "#E5E7EB", maxWidth: "640px" }}>
  Unified access control, payments, and smart infrastructure for banks,
  hospitals, malls, and enterprise campuses.
</p>

        <div style={{
  marginTop: "32px",
  display: "flex",
  gap: "16px",
  flexWrap: "wrap"
}}>

  <div style={{
    marginTop: "30px",
    display: "flex",
    gap: "16px"
  }}>
    <a>View Solutions</a>
    <a>Investor Overview</a>
    <a>Contact Us</a>
  </div>

</div>
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
        <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "24px"
}}>
  <div style={cardStyle}>
    🏦<br />
    <strong>Banks</strong>
    <p>Secure access, payments, and compliance-ready infrastructure.</p>
  </div>

  <div style={cardStyle}>
    🏥<br />
    <strong>Hospitals</strong>
    <p>Controlled access, patient safety, and smart facility management.</p>
  </div>

  <div style={cardStyle}>
    🏬<br />
    <strong>Malls</strong>
    <p>Visitor flow, parking access, and cashless experiences.</p>
  </div>

  <div style={cardStyle}>
    🏢<br />
    <strong>Enterprise</strong>
    <p>Campus-wide identity, access, and payment systems.</p>
  </div>
</div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <h2 style={{
  background: "white",
  color: "var(--primary)",
  padding: "14px 24px",
  borderRadius: "8px",
  fontWeight: 600
}}>
          Contact NexAccess
        </h2>
        <p style={{
  background: "transparent",
color: "white",
border: "1px solid rgba(255,255,255,0.6)",
  padding: "14px 24px",
  borderRadius: "8px"
}}>
          Let’s discuss deployment, partnerships, or pilot programs.
        </p>

        <p style={{
  background: "var(--accent)",
  color: "white",
  padding: "14px 24px",
  borderRadius: "8px"
}}>
          📧 Email: <strong>info@nexaccesssystems.com</strong><br />
          📍 Nigeria
        </p>
      </section>

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
