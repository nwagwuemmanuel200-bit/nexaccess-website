export default function InvestorsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Investor Overview</h1>
          <p>
            NexAccess Global System is building secure, compliant access
            control and payment infrastructure for regulated environments
            across Africa.
          </p>

          <div style={{ marginTop: 32 }}>
            <a
              href="/investor-deck.pdf"
              target="_blank"
              className="btn primary"
            >
              Download Investor Deck
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          <div className="card">
            <h3>Enterprise Focus</h3>
            <p>Banks, hospitals, governments & campuses</p>
          </div>

          <div className="card">
            <h3>OEM Partnerships</h3>
            <p>Certified hardware manufacturers</p>
          </div>

          <div className="card">
            <h3>Africa-First Strategy</h3>
            <p>Nigeria entry → Pan-African expansion</p>
          </div>
        </div>
      </section>
    </main>
  );
}
