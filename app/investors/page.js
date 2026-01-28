export const metadata = {
  title: "Investors | NexAccess",
};

export default function InvestorsPage() {
  return (
    <main className="fade-in">
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
            Investor Overview
          </h1>

          <p style={{ maxWidth: "640px", fontSize: "18px" }}>
            NexAccess Global System is building secure, compliant
            access control and payment infrastructure for regulated
            environments across Africa.
          </p>

          <div style={{ marginTop: "40px" }}>
            <a
              href="/investor-deck.pdf"
              target="_blank"
              style={{
                background: "#0b1f3b",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: 600,
              }}
            >
              Download Investor Deck
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
