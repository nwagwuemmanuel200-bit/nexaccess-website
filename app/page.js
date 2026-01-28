export const metadata = {
  title: "NexAccess Global System",
  description:
    "Unified access control, payments, and smart infrastructure for banks, hospitals, and enterprise campuses.",
};

const BRAND = {
  blueDark: "#0B1F3B",
  blue: "#123B7A",
  gold: "#C9A24D",
};

export default function HomePage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 20px" }}>
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "24px",
          borderBottom: `1px solid ${BRAND.gold}33`,
          marginBottom: "64px",
        }}
      >
        <div>
          <div style={{ fontSize: "22px", fontWeight: 800, color: BRAND.blueDark }}>
            NexAccess
          </div>
          <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#6B7280" }}>
            GLOBAL SYSTEM
          </div>
        </div>

        <nav style={{ display: "flex", gap: "24px" }}>
          <a href="/" style={navStyle}>Home</a>
          <a href="/investors" style={navStyle}>Investors</a>
          <a href="/contact" style={navStyle}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ marginBottom: "96px" }}>
        <h1 style={{ fontSize: "48px", color: BRAND.blueDark, marginBottom: "24px" }}>
          NexAccess Global System
        </h1>

        <p style={{ fontSize: "20px", color: "#374151", maxWidth: "720px" }}>
          Unified access control, payments, and smart infrastructure designed
          for regulated environments including banks, hospitals, malls, and
          enterprise campuses.
        </p>

        <div style={{ marginTop: "40px", display: "flex", gap: "16px" }}>
          <a href="/investors" style={primaryButton}>
            Investor Overview
          </a>
          <a href="/contact" style={secondaryButton}>
            Contact Us
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={sectionStyle}>
        <h2>Problem</h2>
        <ul>
          <li>Fragmented access and payment systems</li>
          <li>Security risks in regulated environments</li>
          <li>Poor integration between physical and financial access</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section style={sectionStyle}>
        <h2>Solution</h2>
        <ul>
          <li>Unified access + payments platform</li>
          <li>Bank-grade compliance approach</li>
          <li>Hardware + software integration model</li>
        </ul>
      </section>

      {/* TARGET MARKETS */}
      <section style={sectionStyle}>
        <h2>Target Markets</h2>
        <ul>
          <li>Banks & financial institutions</li>
          <li>Hospitals & healthcare networks</li>
          <li>Commercial real estate & malls</li>
          <li>Government & enterprise campuses</li>
        </ul>
      </section>

      {/* BUSINESS MODEL */}
      <section style={sectionStyle}>
        <h2>Business Model</h2>
        <ul>
          <li>Hardware deployment & leasing</li>
          <li>Software & platform integration</li>
          <li>Maintenance & support contracts</li>
        </ul>
      </section>

      {/* CTA */}
      <section
        style={{
          marginTop: "96px",
          padding: "64px 32px",
          background: BRAND.blueDark,
          borderRadius: "24px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Partner with NexAccess
        </h2>

        <p style={{ maxWidth: "640px", margin: "0 auto 32px", opacity: 0.9 }}>
          We work with OEM manufacturers, banks, and infrastructure operators
          to deploy compliant, scalable access and payment systems.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <a href="/investors" style={ctaButton}>
            Investor Relations
          </a>
          <a href="/contact" style={ctaOutlineButton}>
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "96px",
          textAlign: "center",
          fontSize: "14px",
          color: "#6B7280",
        }}
      >
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}

/* ---------- STYLES ---------- */

const navStyle = {
  textDecoration: "none",
  color: "#374151",
  fontWeight: 500,
};

const sectionStyle = {
  marginBottom: "64px",
  borderBottom: "1px solid #E5E7EB",
  paddingBottom: "40px",
};

const primaryButton = {
  background: BRAND.blueDark,
  color: "white",
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 600,
};

const secondaryButton = {
  background: "white",
  color: BRAND.blueDark,
  padding: "14px 28px",
  borderRadius: "12px",
  border: `1px solid ${BRAND.blueDark}`,
  textDecoration: "none",
  fontWeight: 600,
};

const ctaButton = {
  background: "white",
  color: BRAND.blueDark,
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 600,
};

const ctaOutlineButton = {
  border: "1px solid white",
  color: "white",
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 600,
};
