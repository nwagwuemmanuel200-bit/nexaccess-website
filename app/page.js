export const metadata = {
  title: "NexAccess Global System | Unified Access & Payments",
  description:
    "NexAccess Global System builds secure, compliant access control and payment infrastructure for banks, hospitals, and governments across Africa.",
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
          background:
            "linear-gradient(135deg, #0B1F3B 0%, #123B7A 100%)",
          color: "white",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <img
          src="/images/hero.svg"
          alt="NexAccess Infrastructure"
          style={{
            maxWidth: "520px",
            width: "100%",
            margin: "0 auto 48px",
            opacity: 0.95,
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
          Unified Access Control & Payments Infrastructure
        </h1>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto 40px",
            fontSize: "18px",
            opacity: 0.95,
          }}
        >
          NexAccess Global System builds secure, compliant access and payment
          platforms for banks, hospitals, commercial estates, and government
          facilities across Africa.
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
      </section>

      {/* CONTENT SECTION */}
      <section
        style={{
          padding: "96px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
            Our Solution
          </h2>

          <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration model</li>
            <li>Enterprise-ready deployment across Africa</li>
          </ul>
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
