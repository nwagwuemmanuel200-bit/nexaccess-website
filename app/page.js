export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="fade-up">
            <h1>Unified Access Control & Payments Infrastructure</h1>
            <p>
              Secure, compliant access and payment platforms for banks,
              hospitals, enterprises, and governments across Africa.
            </p>

            <div className="hero-buttons">
              <a href="/investors" className="btn primary">
                Investor Overview
              </a>
              <a href="/contact" className="btn secondary">
                Contact Us
              </a>
            </div>
          </div>

          <img
            src="/images/hero.svg"
            alt="NexAccess infrastructure"
            className="hero-image fade-up delay-1"
          />
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="section">
        <div className="container">
          <h2 className="fade-up">Compliance & Trust Framework</h2>
          <div className="card-grid">
            {[
              "PCI DSS aligned payment architecture",
              "EMV & contactless-ready infrastructure",
              "Designed to meet ISO 27001 controls",
              "Cloud-ready with regional data control",
              "Built for regulated environments",
            ].map((item, i) => (
              <div key={item} className={`card fade-up delay-${i + 1}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section section-muted">
        <div className="container">
          <h2 className="fade-up">Trusted & Ecosystem Alignment</h2>
          <div className="card-grid">
            {[
              "Banking Infrastructure",
              "Healthcare Systems",
              "Government Facilities",
              "Cloud & Data Platforms",
              "OEM Hardware Partners",
            ].map((item, i) => (
              <div key={item} className={`card fade-up delay-${i + 1}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
