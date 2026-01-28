export const metadata = {
  title: "NexAccess Global System | Unified Access & Payments",
  description:
    "NexAccess Global System provides secure, compliant access control and payment infrastructure for banks, hospitals, enterprises, and governments across Africa.",
};

export default function HomePage() {
  return (
    <main style={{ background: "#F7F9FC", color: "#0B1F3B" }}>
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0B1F3B 0%, #123B7A 100%)",
          color: "white",
          padding: "120px 24px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
          }}
        >
          {/* Text */}
          <div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Unified Access Control <br /> & Payments Infrastructure
            </h1>

            <p
              style={{
                fontSize: "18px",
                maxWidth: "520px",
                opacity: 0.95,
                marginBottom: "32px",
              }}
            >
              NexAccess Global System builds secure, compliant access and
              payment platforms for banks, hospitals, enterprises, and
              governments across Africa.
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
          </div>

          {/* Hero Image */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/hero.svg"
              alt="NexAccess Infrastructure Diagram"
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

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>
            Our Solution
          </h2>
          <ul style={{ fontSize: "18px", lineHeight: 1.8 }}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration model</li>
            <li>Cloud-ready with regulatory controls</li>
          </ul>
        </div>
      </section>

      {/* ================= TARGET MARKETS ================= */}
      <section style={{ background: "white", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>
            Target Markets
          </h2>
          <ul style={{ fontSize: "18px", lineHeight: 1.8 }}>
            <li>Banks & financial institutions</li>
            <li>Hospitals & healthcare networks</li>
            <li>Commercial real estate & malls</li>
            <li>Government & enterprise campuses</li>
          </ul>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          background: "#0B1F3B",
          color: "white",
          textAlign: "center",
          padding: "32px 16px",
          fontSize: "14px",
        }}
      >
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}
