export const metadata = {
  title: "NexAccess Global System",
  description:
    "Unified access control and payments infrastructure for banks, hospitals, enterprises, and governments across Africa.",
};

export default function HomePage() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* NAV */}
      <header style={nav}>
        <strong>NexAccess<br /><span style={{ fontSize: 12 }}>GLOBAL SYSTEM</span></strong>
        <nav style={navLinks}>
          <a href="/">Home</a>
          <a href="/investors">Investors</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={hero}>
        <div style={heroContent}>
          <h1 style={heroTitle}>
            Unified Access Control & Payments Infrastructure
          </h1>
          <p style={heroText}>
            Secure, compliant access and payment platforms for banks,
            hospitals, enterprises, and governments across Africa.
          </p>

          <div style={buttons}>
            <a href="/investors" style={primaryBtn}>Investor Overview</a>
            <a href="/contact" style={secondaryBtn}>Contact Us</a>
          </div>
        </div>

        <img
          src="/images/hero.svg"
          alt="NexAccess platform"
          style={heroImage}
        />
      </section>

      {/* SOLUTION */}
      <section style={section}>
        <h2>Our Solution</h2>
        <ul>
          <li>Unified access + payments platform</li>
          <li>Bank-grade compliance architecture</li>
          <li>Hardware & software integration</li>
          <li>Cloud-ready with regulatory controls</li>
        </ul>
      </section>

      <footer style={footer}>
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}

/* STYLES */
const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 40px",
  borderBottom: "1px solid #eee",
};

const navLinks = { display: "flex", gap: 20 };

const hero = {
  display: "flex",
  flexWrap: "wrap",
  gap: 40,
  padding: "80px 40px",
  background: "linear-gradient(135deg, #081b33, #0b3a6e)",
  color: "white",
};

const heroContent = { maxWidth: 520 };

const heroTitle = { fontSize: 42, lineHeight: 1.2 };
const heroText = { opacity: 0.9, marginTop: 20 };

const buttons = { display: "flex", gap: 16, marginTop: 30 };

const primaryBtn = {
  background: "white",
  color: "#081b33",
  padding: "14px 24px",
  borderRadius: 10,
  fontWeight: 600,
};

const secondaryBtn = {
  border: "2px solid white",
  padding: "14px 24px",
  borderRadius: 10,
  color: "white",
};

const heroImage = {
  maxWidth: 420,
  width: "100%",
  animation: "float 6s ease-in-out infinite",
};

const section = {
  padding: "80px 40px",
  maxWidth: 900,
  margin: "0 auto",
};

const footer = {
  padding: 40,
  textAlign: "center",
  opacity: 0.6,
};
