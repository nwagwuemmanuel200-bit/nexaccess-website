export const metadata = {
  title: "Investors | NexAccess Global System",
  description:
    "Investor and partner overview of NexAccess Global System.",
};

const BRAND = {
  blueDark: "#0B1F3B",
  gold: "#C9A24D",
};

export default function InvestorsPage() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 20px" }}>
      {/* TITLE */}
      <h1 style={{ fontSize: "44px", color: BRAND.blueDark, marginBottom: "24px" }}>
        Investor Overview
      </h1>

      <p style={{ fontSize: "18px", color: "#374151", marginBottom: "64px" }}>
        NexAccess Global System is building unified access control and payment
        infrastructure for highly regulated environments across Africa.
      </p>

      {/* PROBLEM */}
      <Section title="Problem">
        <ul>
          <li>Fragmented access control and payment systems</li>
          <li>Security and compliance gaps in regulated facilities</li>
          <li>Operational inefficiencies across physical infrastructure</li>
        </ul>
      </Section>

      {/* SOLUTION */}
      <Section title="Solution">
        <ul>
          <li>Unified access + payments platform</li>
          <li>Bank-grade compliance architecture</li>
          <li>Hardware + software integration model</li>
        </ul>
      </Section>

      {/* TARGET MARKETS */}
      <Section title="Target Markets">
        <ul>
          <li>Banks & financial institutions</li>
          <li>Hospitals & healthcare networks</li>
          <li>Commercial real estate & malls</li>
          <li>Government & enterprise campuses</li>
        </ul>
      </Section>

      {/* BUSINESS MODEL */}
      <Section title="Business Model">
        <ul>
          <li>Hardware deployment & leasing</li>
          <li>Software & platform integration</li>
          <li>Maintenance & long-term support contracts</li>
        </ul>
      </Section>

      {/* CTA */}
      <section
        style={{
          marginTop: "80px",
          padding: "56px 32px",
          background: BRAND.blueDark,
          borderRadius: "24px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          Investor Materials
        </h2>

        <p style={{ maxWidth: "600px", margin: "0 auto 32px", opacity: 0.9 }}>
          Download our investor presentation or contact us to discuss strategic
          partnerships.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <a
            href="/investor-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={primaryButton}
          >
            Download Investor Deck
          </a>

          <a href="/contact" style={outlineButton}>
            Contact Investor Relations
          </a>
        </div>
      </section>

      <footer
        style={{
          marginTop: "80px",
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

/* ---------- COMPONENTS ---------- */

function Section({ title, children }) {
  return (
    <section
      style={{
        marginBottom: "56px",
        paddingBottom: "32px",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <h2 style={{ fontSize: "26px", color: "#0B1F3B", marginBottom: "16px" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ---------- STYLES ---------- */

const primaryButton = {
  background: "white",
  color: BRAND.blueDark,
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 600,
};

const outlineButton = {
  border: "1px solid white",
  color: "white",
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 600,
};
