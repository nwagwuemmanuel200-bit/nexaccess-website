export const metadata = {
  title: "NexAccess Global System | Unified Access & Payments",
  description:
    "NexAccess Global System provides secure, compliant access control and payment infrastructure for banks, hospitals, enterprises, and governments across Africa.",
};

export default function HomePage() {
  return (
    <main
      style={{
        background: "#F7F9FC",
        color: "#0B1F3B",
        lineHeight: "1.7",
      }}
    >
      {/* HERO SECTION */}
<section
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "120px 24px",
    background: "linear-gradient(135deg, #0B1F3B 0%, #123B7A 100%)",
    color: "white",
  }}
>
  <img
    src="/images/hero.svg"
    alt="NexAccess Infrastructure"
    style={{
      maxWidth: "520px",
      width: "100%",
      marginBottom: "40px",
    }}
  />

  <h1
    style={{
      fontSize: "48px",
      fontWeight: 800,
      marginBottom: "24px",
      lineHeight: "1.2",
    }}
  >
    Unified Access Control<br />& Payments Infrastructure
  </h1>

  <p
    style={{
      maxWidth: "720px",
      fontSize: "18px",
      opacity: 0.9,
      marginBottom: "40px",
    }}
  >
    NexAccess Global System builds secure, compliant access and payment
    platforms for banks, hospitals, commercial estates, and government
    facilities across Africa.
  </p>

  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
    <a
      href="/investors"
      style={{
        background: "white",
        color: "#0B1F3B",
        padding: "14px 28px",
        borderRadius: "10px",
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      Investor Overview
    </a>

    <a
      href="/contact"
      style={{
        border: "1px solid white",
        color: "white",
        padding: "14px 28px",
        borderRadius: "10px",
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      Contact Us
    </a>
  </div>
</section>

      {/* CONTENT */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* PROBLEM */}
          <Section title="The Problem">
            <ul>
              <li>Fragmented access control and payment systems</li>
              <li>Security and compliance gaps in regulated environments</li>
              <li>Poor integration between physical and financial access</li>
            </ul>
          </Section>

          {/* SOLUTION */}
          <Section title="Our Solution">
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
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          padding: "120px 24px",
          background:
            "linear-gradient(135deg, #0B1F3B 0%, #0A1A33 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
            Work With NexAccess
          </h2>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.9,
              marginBottom: "48px",
            }}
          >
            We work with OEM manufacturers, banks, and infrastructure
            operators to deploy compliant, scalable access and payment
            systems across Africa.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/investors"
              style={{
                background: "white",
                color: "#0B1F3B",
                padding: "16px 32px",
                borderRadius: "12px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Investor Relations
            </a>

            <a
              href="/contact"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "16px 32px",
                borderRadius: "12px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "32px",
          fontSize: "14px",
          color: "#6B7280",
        }}
      >
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "72px" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>{title}</h2>
      <div style={{ fontSize: "18px" }}>{children}</div>
    </section>
  );
}
