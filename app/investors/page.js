export default function InvestorsPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="fade-up">Investor Overview</h1>
        <p className="fade-up delay-1" style={{ maxWidth: 640 }}>
          NexAccess Global System is building secure, compliant access control
          and payment infrastructure for regulated environments across Africa.
        </p>

        <a
          href="/investor-deck.pdf"
          target="_blank"
          className="btn primary fade-up delay-2"
          style={{ display: "inline-block", marginTop: 32 }}
        >
          Download Investor Deck
        </a>
      </div>
    </main>
  );
}
