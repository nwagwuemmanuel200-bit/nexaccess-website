export const metadata = {
  title: "NexAccess Global System",
  description:
    "Unified access control, payments, and smart infrastructure for regulated environments",
};

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px",
        lineHeight: "1.7",
      }}
    >
      {/* HERO SECTION */}
      <section style={{ marginBottom: "96px" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            maxWidth: "720px",
            marginBottom: "24px",
          }}
        >
          Unified Access Control & Payments Infrastructure
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            maxWidth: "700px",
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
              background: "#0B1F3B",
              color: "white",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Investor Overview
          </a>

          <a
            href="/contact"
            style={{
              border: "2px solid #0B1F3B",
              color: "#0B1F3B",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* WHAT WE SOLVE */}
      <section style={{ marginBottom: "72px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          The Problem We Solve
        </h2>
        <ul style={{ fontSize: "18px", color: "#444" }}>
          <li>Fragmented access control and payment systems</li>
          <li>Security and compliance gaps in regulated environments</li>
          <li>Poor integration between physical and financial access</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section style={{ marginBottom: "72px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Our Solution
        </h2>
        <ul style={{ fontSize: "18px", color: "#444" }}>
          <li>Unified access + payments platform</li>
          <li>Bank-grade compliance architecture</li>
          <li>Hardware + software integration model</li>
        </ul>
      </section>

      {/* TARGET MARKETS */}
      <section style={{ marginBottom: "72px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Target Markets
        </h2>
        <ul style={{ fontSize: "18px", color: "#444" }}>
          <li>Banks & financial institutions</li>
          <li>Hospitals & healthcare networks</li>
          <li>Commercial real estate & malls</li>
          <li>Government & enterprise campuses</li>
        </ul>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0B1F3B",
          color: "white",
          padding: "64px 40px",
          borderRadius: "24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Work With NexAccess
        </h2>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "640px",
            margin: "0 auto 40px",
            opacity: 0.9,
          }}
        >
          We collaborate with OEM manufacturers, banks, and infrastructure
          operators to deploy compliant, scalable access and payment systems.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/investors"
            style={{
              background: "white",
              color: "#0B1F3B",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Investor Relations
          </a>

          <a
            href="/contact"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
