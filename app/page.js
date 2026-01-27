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
    padding: "20px 24px",
    marginBottom: "32px",
    borderBottom: `1px solid ${BRAND.gold}33`
  }}
>
  {/* Logo */}
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
   <div style={{ display: "flex", flexDirection: "column" }}>

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
  color: "white",
}}>
  Smart Access, Payments & Infrastructure
</h1>

<p style={{
  fontSize: "20px",
  maxWidth: "700px",
  opacity: 0.9,
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
      style={{
  border: "1px solid #e6eaf0",
  borderRadius: "16px",
  padding: "28px",
  background: "white",
  boxShadow: "0 10px 30px rgba(11,31,59,0.06)"
}}
        <h3
  style={{
    marginBottom: "10px",
    color: BRAND.blueDark,
    fontSize: "20px"
  }}
>
  {title}
</h3>
        <p
  style={{
    color: "#5f6b7a",
    lineHeight: "1.6"
  }}
>
  {desc}
</p>
      </div>
    ))}
  </div>
</section>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section
  id="investors"
  style={{
    background: "linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)",
    padding: "100px 48px",
    borderRadius: "28px",
    marginBottom: "140px"
  }}
>
  <h2
  style={{
    fontSize: "38px",
    fontWeight: 700,
    color: BRAND.blueDark,
    marginBottom: "20px"
  }}
>
  Investor Overview
</h2>

  <p
  style={{
    maxWidth: "820px",
    marginBottom: "36px",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#4b5563"
  }}
>
    NexAccess is positioned at the intersection of access control,
    financial technology, and smart infrastructure, targeting
    high-growth emerging markets.
  </p>

  <ul
  style={{
    maxWidth: "820px",
    color: "#374151",
    lineHeight: "1.8",
    paddingLeft: "20px"
  }}
>
    <li>Multi-sector platform: banking, healthcare, retail, enterprise</li>
    <li>Hardware + software + recurring service revenue</li>
    <li>Strategic partnerships with financial institutions</li>
    <li>Scalable deployments across Africa and global markets</li>
  </ul>
</section>

      {/* ================= CONTACT SECTION ================= */}
      <section
  id="contact"
  style={{
    background: "linear-gradient(135deg, #0B1F3B, #123B7A)",
    padding: "100px 48px",
    borderRadius: "28px",
    color: "white",
    marginBottom: "140px"
  }}
>
        <h2
  style={{
    fontSize: "38px",
    fontWeight: 700,
    marginBottom: "20px"
  }}
>
  Let’s Build the Future Together
</h2>
          Contact NexAccess
        </h2>

        <p style={{ fontSize: "18px", color: "#555" }}>
          <p
  style={{
    maxWidth: "720px",
    fontSize: "18px",
    lineHeight: "1.7",
    opacity: 0.95,
    marginBottom: "32px"
  }}
>
  NexAccess partners with banks, healthcare institutions, governments,
  and enterprises to deploy secure access control, payments, and smart
  infrastructure solutions across emerging and global markets.
</p>

        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
  📧 <strong>Email:</strong> info@nexaccesssystems.com
</p>

<p style={{ fontSize: "16px", opacity: 0.9 }}>
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
