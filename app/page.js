export const metadata = {
  title: "NexAccess Global System | Unified Access & Payments",
  description:
    "NexAccess Global System builds secure, compliant access control and payment infrastructure for Africa.",
};

export default function HomePage() {
  return (
    <main style={{ background: "#F7F9FC", color: "#0B1F3B" }}>
      {/* ================= HEADER ================= */}
      <header
        style={{
          background: "white",
          borderBottom: "1px solid #E6EAF0",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: "18px" }}>
            NexAccess
            <div style={{ fontSize: "12px", opacity: 0.7 }}>
              GLOBAL SYSTEM
            </div>
          </div>

          <nav style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
            <a href="/" style={{ color: "#123B7A", fontWeight: 600 }}>
              Home
            </a>
            <a href="/investors">Investors</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #0B1F3B, #123B7A)",
          color: "white",
          padding: "120px 24px",
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* TEXT */}
          <div>
            <h1
              style={{
                fontSize: "48px",
                lineHeight: "1.2",
                marginBottom: "24px",
              }}
            >
              Unified Access Control & Payments Infrastructure
            </h1>

            <p
              style={{
                fontSize: "18px",
                opacity: 0.9,
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              NexAccess Global System builds secure, compliant access and payment
              platforms for banks, hospitals, enterprises, and governments across
              Africa.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="/investors"
                style={{
                  background: "white",
                  color: "#0B1F3B",
                  padding: "14px 24px",
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
                  padding: "14px 24px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/hero.svg"
              alt="NexAccess Infrastructure Illustration"
              style={{
                width: "100%",
                maxWidth: "520px",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
            Our Solution
          </h2>

          <ul style={{ fontSize: "16px", lineHeight: "1.8" }}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration model</li>
            <li>Cloud-ready with regulatory controls</li>
          </ul>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          borderTop: "1px solid #E6EAF0",
          padding: "32px 24px",
          textAlign: "center",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} NexAccess Global System
      </footer>

      {/* ================= RESPONSIVE ================= */}
      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </main>
  );
}
