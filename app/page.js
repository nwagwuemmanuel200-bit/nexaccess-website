const BRAND = {
  blueDark: "#0B1F3B",
  blue: "#123B7A",
  gold: "#C9A24D"
};

// force rebuild

export default function HomePage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 40px" }}>
{/* HEADER */}
<header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 32px",
    marginBottom: "32px",
    borderBottom: `1px solid ${BRAND.gold}33`
  }}
>
  {/* Logo */}
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
   <div style={{ display: "flex", flexDirection: "column" }}>
<img
  src="/logo.PNG"
  alt="NexAccess Logo"
  style={{
    height: "64px",
    marginBottom: "6px"
  }}
/>
  <span style={{
    fontSize: "22px",
    fontWeight: 700,
    color: BRAND.blueDark
  }}>
    NexAccess
  </span>
  <span style={{
    fontSize: "12px",
    letterSpacing: "2px",
    color: "#6b7280"
  }}>
    GLOBAL SYSTEM
  </span>
</div>
  </div>

  {/* Navigation */}
  <nav style={{ display: "flex", gap: "24px", fontWeight: 500 }}>
  <a href="#solutions">Solutions</a>
  <a href="#investors">Investors</a>
  <a href="#contact">Contact</a>
</nav>
</header>

      {/* ================= HERO SECTION ================= */}
<section
  style={{
    background: "linear-gradient(135deg, #0B1F3B, #123B7A)",
    color: "white",
    padding: "100px 40px",
    borderRadius: "24px",
    marginBottom: "100px"
  }}
>
      >
        <h1 style={{
  fontSize: "52px",
  fontWeight: 700,
  lineHeight: "1.2",
  maxWidth: "800px",
  marginBottom: "24px"
}}>
  Smart Access, Payments & Infrastructure
</h1>

<p style={{
  fontSize: "20px",
  maxWidth: "700px",
  opacity: 0.95,
  marginBottom: "40px"
}}>
  NexAccess delivers unified access control, payment systems, and
  smart infrastructure solutions for banks, hospitals, malls, and
  enterprise campuses across emerging markets.
</p>

<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
  <a href="#solutions"
    style={{
      background: "white",
      color: "#0B1F3B",
      padding: "14px 28px",
      borderRadius: "12px",
      fontWeight: 600,
      textDecoration: "none"
    }}>
    View Solutions
  </a>

  <a
  href="#solutions"
  style={{
    backgroundColor: BRAND.gold,
    color: "#0B1F3B",
    padding: "14px 24px",
    borderRadius: "12px",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(201,162,77,0.35)"
  }}
>
  View Solutions
</a>
</div>
      </section>

      {/* ================= SOLUTIONS SECTION ================= */}
      <section id="solutions" style={{ marginBottom: "120px" }}>
  <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
    Our Solutions
  </h2>

  <p style={{ maxWidth: "700px", marginBottom: "40px", color: "#555" }}>
    Modular, scalable systems designed for financial institutions,
    healthcare, retail, and large enterprises.
  </p>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px"
  }}>
    {[
      ["Access Control Systems", "Biometric, RFID, and smart gate solutions for secure facilities."],
      ["Smart Payments & POS", "Certified payment terminals and contactless payment infrastructure."],
      ["License Plate Recognition (LPR)", "Automated vehicle access, parking, and traffic control systems."],
      ["Smart Parking & Campus", "Integrated parking, access, and monitoring for large campuses."]
    ].map(([title, desc]) => (
      <div key={title} style={{
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "24px"
      }}>
        <h3 style={{ marginBottom: "8px" }}>{title}</h3>
        <p style={{ color: "#555" }}>{desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section id="investors" style={{
  background: "#F7F9FC",
  padding: "80px 40px",
  borderRadius: "24px",
  marginBottom: "120px"
}}>
  <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
    Investor Overview
  </h2>

  <p style={{ maxWidth: "800px", marginBottom: "32px", color: "#444" }}>
    NexAccess is positioned at the intersection of access control,
    financial technology, and smart infrastructure, targeting
    high-growth emerging markets.
  </p>

  <ul style={{ maxWidth: "800px", color: "#444", lineHeight: "1.8" }}>
    <li>Multi-sector platform: banking, healthcare, retail, enterprise</li>
    <li>Hardware + software + recurring service revenue</li>
    <li>Strategic partnerships with financial institutions</li>
    <li>Scalable deployments across Africa and global markets</li>
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
