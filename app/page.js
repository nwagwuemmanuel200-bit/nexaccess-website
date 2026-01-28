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
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>
            Our Solution
          </h2>
          <ul style={{ fontSize: "18px", lineHeight: 1.8 }}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration</li>
            <li>Cloud-ready with regulatory controls</li>
          </ul>
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
