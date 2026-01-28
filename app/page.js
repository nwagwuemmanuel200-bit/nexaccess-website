export const metadata = {
  title: "Investors | NexAccess Global System",
  description:
    "Investor overview, traction, and roadmap for NexAccess Global System — unified access control and payment infrastructure for Africa.",
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
          padding: "110px 24px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 800 }}>
          Investor Overview
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "20px auto 0",
            fontSize: "18px",
            opacity: 0.95,
          }}
        >
          NexAccess Global System is building secure, compliant access control
          and payment infrastructure for regulated environments across Africa.
        </p>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* PROBLEM */}
          <h2 style={{ fontSize: "34px" }}>The Problem</h2>
          <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
            <li>Fragmented access control and payment systems</li>
            <li>Security and compliance gaps in regulated facilities</li>
            <li>High operational costs and manual oversight</li>
          </ul>

          <hr style={{ margin: "56px 0", borderColor: "#E5E7EB" }} />

          {/* SOLUTION */}
          <h2 style={{ fontSize: "34px" }}>Our Solution</h2>
          <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
            <li>Unified access + payments infrastructure</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware + software integrated platform</li>
            <li>Cloud-ready with local regulatory control</li>
          </ul>

          <hr style={{ margin: "56px 0", borderColor: "#E5E7EB" }} />

          {/* BUSINESS MODEL */}
          <h2 style={{ fontSize: "34px" }}>Business Model</h2>
          <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
            <li>Hardware deployment & leasing</li>
            <li>Software licensing & integrations</li>
            <li>Maintenance & long-term support contracts</li>
            <li>Transaction & infrastructure service fees</li>
          </ul>

          <hr style={{ margin: "56px 0", borderColor: "#E5E7EB" }} />

          {/* TRACTION */}
          <h2 style={{ fontSize: "34px", marginBottom: "24px" }}>
            Traction & Validation
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "Enterprise Focus",
                desc: "Targeting banks, hospitals, government & enterprise campuses",
              },
              {
                title: "OEM Partnerships",
                desc: "Working with certified hardware manufacturers",
              },
              {
                title: "Regulatory Alignment",
                desc: "Designed for bank-grade compliance & audits",
              },
              {
                title: "Africa-First Strategy",
                desc: "Nigeria as entry market with pan-African expansion",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "28px",
                  borderRadius: "16px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "16px", color: "#475569" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <hr style={{ margin: "64px 0", borderColor: "#E5E7EB" }} />

          {/* ROADMAP */}
          <h2 style={{ fontSize: "34px", marginBottom: "24px" }}>
            Product & Expansion Roadmap
          </h2>

          <div
            style={{
              display: "grid",
              gap: "24px",
            }}
          >
            {[
              {
                phase: "Phase 1 — Foundation",
                items: [
                  "Core access & payment platform",
                  "OEM hardware integrations",
                  "Regulatory & security framework",
                ],
              },
              {
                phase: "Phase 2 — Market Entry",
                items: [
                  "Nigeria pilot deployments",
                  "Bank & enterprise partnerships",
                  "Operational scaling",
                ],
              },
              {
                phase: "Phase 3 — Expansion",
                items: [
                  "Pan-African rollout",
                  "Advanced analytics & reporting",
                  "Multi-sector integrations",
                ],
              },
            ].map((block, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "32px",
                  borderRadius: "18px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
                  {block.phase}
                </h3>
                <ul style={{ paddingLeft: "18px" }}>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr style={{ margin: "72px 0", borderColor: "#E5E7EB" }} />

          {/* CTA */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0B1F3B 0%, #123B7A 100%)",
              color: "white",
              padding: "64px 32px",
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                maxWidth: "680px",
                margin: "0 auto 32px",
                opacity: 0.95,
              }}
            >
              Download our investor presentation or contact us to discuss
              strategic investment and partnerships.
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
