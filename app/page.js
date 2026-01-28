export const metadata = {
  title: "Investors | NexAccess Global System",
  description:
    "Investor overview of NexAccess Global System — unified access control and payment infrastructure for Africa.",
};

export default function InvestorsPage() {
  return (
    <main
      style={{
        background: "#F7F9FC",
        color: "#0B1F3B",
        lineHeight: "1.7",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0B1F3B 0%, #123B7A 100%)",
          color: "white",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            marginBottom: "16px",
          }}
        >
          Investor Overview
        </h1>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            fontSize: "18px",
            opacity: 0.95,
          }}
        >
          NexAccess Global System is building secure, compliant access control
          and payment infrastructure for highly regulated environments across
          Africa.
        </p>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* PROBLEM */}
          <h2 style={{ fontSize: "34px", marginBottom: "16px" }}>
            The Problem
          </h2>
          <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
            <li>Fragmented access control and payment systems</li>
            <li>Security and compliance gaps in regulated facilities</li>
            <li>Operational inefficiencies across physical infrastructure</li>
          </ul>

          <hr style={{ margin: "48px 0", borderColor: "#E5E7EB" }} />

          {/* SOLUTION */}
          <h2 style={{ fontSize: "34px", marginBottom: "16px" }}>
            Our Solution
          </h2>
          <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration model</li>
            <li>Scalable deployment across Africa</li>
          </ul>

          <hr style={{ margin: "48px 0", borderColor: "#E5E7EB" }} />

          {/* BUSINESS MODEL */}
          <h2 style={{ fontSize: "34px", marginBottom: "16px" }}>
            Business Model
          </h2>
          <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
            <li>Hardware deployment & leasing</li>
            <li>Software & platform integration</li>
            <li>Maintenance & long-term support contracts</li>
          </ul>

          <hr style={{ margin: "64px 0", borderColor: "#E5E7EB" }} />

          {/* CTA CARD */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0B1F3B 0%, #123B7A 100%)",
              color: "white",
              padding: "56px 32px",
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                maxWidth: "640px",
                margin: "0 auto 32px",
                opacity: 0.95,
              }}
            >
              Download our investor presentation or contact us to discuss
              strategic partnerships.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/investor-deck.pdf"
                target="_blank"
                style={{
                  background: "white",
                  color: "#0B1F3B",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Download Investor Deck
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
                Contact Investor Relations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 24px",
          textAlign: "center",
          color: "#6B7280",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}
