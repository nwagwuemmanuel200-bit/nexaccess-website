export default function HomePage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
      
      {/* HERO SECTION */}
      <section
  style={{
    background: "linear-gradient(135deg, #0B1F3A 0%, #1F4FD8 100%)",
    color: "white",
    padding: "100px 60px",
    borderRadius: "12px",
    marginBottom: "100px"
  }}
>
        <h1 style={{
  fontSize: "44px",
  fontWeight: 700,
  marginBottom: "16px",
  color: "white"
}}>
  NexAccess Global System
</h1>

<p style={{
  fontSize: "18px",
  maxWidth: "640px",
  opacity: 0.9,
  color: "#E5E7EB"
}}>
  Unified access control, payments, and smart infrastructure for banks,
  hospitals, malls, and enterprise campuses.
</p>

        <div style={{
  marginTop: "32px",
  display: "flex",
  gap: "16px",
  flexWrap: "wrap"
}}>
  {/* buttons stay the same */}
</div>
          <a
  href="#solutions"
  style={{
    background: "white",
    color: "#0B1F3A",
    padding: "14px 22px",
    borderRadius: "6px",
    fontWeight: 600,
    marginRight: "12px",
    display: "inline-block"
  }}
>
  View Solutions
</a>

<a
  href="/investors"
  style={{
    border: "1px solid white",
    color: "white",
    padding: "14px 22px",
    borderRadius: "6px",
    fontWeight: 600,
    display: "inline-block"
  }}
>
  Investor Overview
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          Contact NexAccess
        </h2>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Let’s discuss deployment, partnerships, or pilot programs.
        </p>

        <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
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
