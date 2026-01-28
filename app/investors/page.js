export const metadata = {
  title: "Investors | NexAccess",
};

export default function InvestorsPage() {
  return (
    <main style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1>Investor Overview</h1>
        <p style={{ fontSize: "18px", maxWidth: "640px" }}>
          NexAccess Global System is building secure, compliant access
          control and payment infrastructure for regulated environments
          across Africa.
        </p>

        <a
          href="/investor-deck.pdf"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "32px",
            background: "#0b1f3b",
            color: "white",
            padding: "14px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Download Investor Deck
        </a>

        <section style={{ marginTop: "80px" }}>
          <h2>Why NexAccess</h2>
          <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <li>Enterprise focus: banks, hospitals, governments</li>
            <li>OEM-certified hardware partnerships</li>
            <li>Africa-first regulatory strategy</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
