export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0b1f3b 0%, #0f2f63 100%)",
          color: "white",
          padding: "100px 24px 140px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "44px", lineHeight: "1.2" }}>
            Unified Access Control & Payments Infrastructure
          </h1>
          <p style={{ maxWidth: "640px", fontSize: "18px", opacity: 0.9 }}>
            Secure, compliant access and payment platforms for banks,
            hospitals, enterprises, and governments across Africa.
          </p>

          <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
            <a
              href="/investors"
              style={{
                background: "white",
                color: "#0b1f3b",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Investor Overview
            </a>
            <a
              href="/contact"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* COMPLIANCE BADGES */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2>Compliance & Trust Framework</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "32px",
            }}
          >
            {[
              "PCI DSS aligned payment architecture",
              "EMV & contactless-ready infrastructure",
              "Designed to meet ISO 27001 controls",
              "Cloud-ready with regional data control",
              "Built for regulated environments",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#f8fafc",
                  padding: "20px",
                  borderRadius: "14px",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2>Our Solution</h2>
          <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration</li>
            <li>Cloud-ready with regulatory controls</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
