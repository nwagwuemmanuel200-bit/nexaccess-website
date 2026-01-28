export const metadata = {
  title: "Contact Us | NexAccess Global System",
  description:
    "Contact NexAccess Global System for partnerships, enterprise deployments, and investor relations.",
};

export default function ContactPage() {
  return (
    <main
      style={{
        background: "#F7F9FC",
        minHeight: "100vh",
        padding: "80px 24px",
        color: "#0B1F3B",
        lineHeight: "1.7",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          padding: "64px",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "16px",
          }}
        >
          Contact NexAccess
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#4B5563",
            marginBottom: "48px",
            maxWidth: "700px",
          }}
        >
          We engage with banks, enterprises, governments, and strategic partners
          across Africa. Reach out to discuss deployments, partnerships, or
          investor relations.
        </p>

        {/* CONTACT DETAILS */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
            Contact Information
          </h2>

          <ul
            style={{
              fontSize: "18px",
              color: "#374151",
              lineHeight: "1.8",
            }}
          >
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@nexaccessglobal.com"
                style={{ color: "#123B7A", textDecoration: "none" }}
              >
                info@nexaccessglobal.com
              </a>
            </li>
            <li>
              <strong>Region:</strong> Nigeria & Africa
            </li>
            <li>
              <strong>Focus:</strong> Banks, hospitals, enterprise & government
              infrastructure
            </li>
          </ul>
        </section>

        {/* INVESTOR CTA */}
        <section
          style={{
            background: "#0B1F3B",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
            Investor & Partnership Enquiries
          </h2>

          <p
            style={{
              fontSize: "16px",
              opacity: 0.9,
              marginBottom: "32px",
            }}
          >
            For strategic partnerships and investment discussions, view our
            investor overview or download our investor deck.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
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
              href="/investor-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Download Investor Deck
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
