// app/page.js

export const metadata = {
  title: "NexAccess Global System",
  description:
    "Unified access control and payment infrastructure for banks, hospitals, enterprises, and government facilities across Africa.",
};

const BRAND = {
  dark: "#0B1F3B",
  blue: "#123B7A",
  light: "#F5F7FA",
  gold: "#C9A24D",
};

export default function HomePage() {
  return (
    <main
      style={{
        background: BRAND.light,
        color: BRAND.dark,
        lineHeight: "1.7",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          padding: "100px 24px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          Unified Access Control & Payments Infrastructure
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "720px",
            color: "#4B5563",
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
              background: BRAND.dark,
              color: "white",
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
              border: `2px solid ${BRAND.dark}`,
              color: BRAND.dark,
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

      {/* PROBLEM */}
      <section
        style={{
          background: "white",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>The Problem</h2>
          <ul style={{ fontSize: "18px", color: "#374151" }}>
            <li>Fragmented access control and payment systems</li>
            <li>Security and compliance gaps in regulated environments</li>
            <li>Poor integration between physical and financial access</li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section
        style={{
          background: BRAND.light,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
            Our Solution
          </h2>
          <ul style={{ fontSize: "18px", color: "#374151" }}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware + software integration model</li>
          </ul>
        </div>
      </section>

      {/* TARGET MARKETS */}
      <section
        style={{
          background: "white",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
            Target Markets
          </h2>
          <ul style={{ fontSize: "18px", color: "#374151" }}>
            <li>Banks & financial institutions</li>
            <li>Hospitals & healthcare networks</li>
            <li>Commercial real estate & malls</li>
            <li>Government & enterprise campuses</li>
          </ul>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section
        style={{
          background: BRAND.light,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
            Business Model
          </h2>
          <ul style={{ fontSize: "18px", color: "#374151" }}>
            <li>Hardware deployment & leasing</li>
            <li>Software & platform integration</li>
            <li>Maintenance & long-term support contracts</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: BRAND.dark,
          color: "white",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Investors & Strategic Partners
        </h2>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 40px",
            opacity: 0.9,
          }}
        >
          Download our investor presentation or contact us to explore strategic
          partnerships.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/investors"
            style={{
              background: "white",
              color: BRAND.dark,
              padding: "14px 28px",
              borderRadius: "10px",
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
    </main>
  );
}
