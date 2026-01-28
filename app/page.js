export const metadata = {
  title: "NexAccess Global System | Unified Access & Payments",
  description:
    "Secure, compliant access control and payment infrastructure for banks, hospitals, enterprises, and governments across Africa.",
};

export default function HomePage() {
  return (
    <main style={{ background: "#F7F9FC", color: "#0B1F3B" }}>
      {/* ================= HEADER ================= */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "white",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <strong style={{ fontSize: "18px" }}>NexAccess Global System</strong>

          <nav style={{ display: "flex", gap: "20px", fontSize: "15px" }}>
            <a href="/" style={navLink(true)}>Home</a>
            <a href="/investors" style={navLink(false)}>Investors</a>
            <a href="/contact" style={navLink(false)}>Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0B1F3B 0%, #123B7A 100%)",
          color: "white",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* TEXT */}
          <div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                lineHeight: "1.15",
                marginBottom: "20px",
              }}
            >
              Unified Access Control & Payments Infrastructure
            </h1>

            <p
              style={{
                fontSize: "18px",
                maxWidth: "520px",
                opacity: 0.9,
                marginBottom: "32px",
              }}
            >
              NexAccess Global System builds secure, compliant access and payment
              platforms for banks, hospitals, enterprises, and governments
              across Africa.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="/investors" style={primaryBtn}>
                Investor Overview
              </a>
              <a href="/contact" style={secondaryBtn}>
                Contact Us
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/hero.svg"
              alt="NexAccess infrastructure illustration"
              style={{
                width: "100%",
                maxWidth: "520px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Our Solution</h2>
          <ul style={listStyle}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration model</li>
            <li>Cloud-ready with regulatory controls</li>
          </ul>
        </div>
      </section>

      {/* ================= TARGET MARKETS ================= */}
      <section style={{ background: "white", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Target Markets</h2>
          <ul style={listStyle}>
            <li>Banks & financial institutions</li>
            <li>Hospitals & healthcare networks</li>
            <li>Commercial real estate & malls</li>
            <li>Government & enterprise campuses</li>
          </ul>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          textAlign: "center",
          padding: "32px 20px",
          borderTop: "1px solid #E5E7EB",
          background: "#F7F9FC",
          fontSize: "14px",
          color: "#475569",
        }}
      >
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}

/* ================= STYLES ================= */

const navLink = (active) => ({
  textDecoration: "none",
  color: active ? "#123B7A" : "#0B1F3B",
  fontWeight: active ? 600 : 500,
});

const primaryBtn = {
  background: "white",
  color: "#0B1F3B",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
};

const secondaryBtn = {
  border: "1px solid white",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
};

const sectionTitle = {
  fontSize: "32px",
  marginBottom: "24px",
};

const listStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
  paddingLeft: "20px",
};
