export const metadata = {
  title: "NexAccess | Unified Access & Payments",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0b1f3b 0%, #123b7a 100%)",
          color: "white",
          padding: "120px 0",
        }}
      >
        <div className="container fade-in">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(36px, 6vw, 56px)",
                  fontWeight: 800,
                  marginBottom: "24px",
                }}
              >
                Unified Access Control & Payments Infrastructure
              </h1>

              <p
                style={{
                  maxWidth: "520px",
                  fontSize: "18px",
                  opacity: 0.95,
                }}
              >
                Secure, compliant access and payment platforms for
                banks, hospitals, enterprises, and governments
                across Africa.
              </p>

              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="/investors"
                  style={{
                    background: "white",
                    color: "#0b1f3b",
                    padding: "14px 28px",
                    borderRadius: "10px",
                    fontWeight: 600,
                  }}
                >
                  Investor Overview
                </a>

                <a
                  href="/contact"
                  style={{
                    border: "2px solid white",
                    padding: "14px 28px",
                    borderRadius: "10px",
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>

            <img
              src="/images/hero.svg"
              alt="NexAccess Platform Diagram"
              style={{
                width: "100%",
                maxWidth: "560px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section-muted">
  <div className="container fade-in">
    <h2 style={{ fontSize: "36px", marginBottom: "32px" }}>
      Our Solution
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px",
      }}
    >
      <div className="card">
        <h3>Unified Platform</h3>
        <p>
          Single infrastructure for access control and payments
          across regulated environments.
        </p>
      </div>

      <div className="card">
        <h3>Bank-Grade Compliance</h3>
        <p>
          Designed with security, auditability, and regulatory
          alignment from day one.
        </p>
      </div>

      <div className="card">
        <h3>Hardware + Software</h3>
        <p>
          OEM-certified hardware integrated with enterprise
          software and APIs.
        </p>
      </div>

      <div className="card">
        <h3>Africa-First Scale</h3>
        <p>
          Built for African markets with pan-African expansion
          capability.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0b1f3b",
          color: "white",
          textAlign: "center",
          padding: "32px",
        }}
      >
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}
