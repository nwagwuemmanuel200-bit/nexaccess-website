export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1>
              Unified Access Control & Payments Infrastructure
            </h1>

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
            className="hero-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Solution</h2>
          <ul>
            <li>Unified access + payments platform</li>
            <li>Bank-grade compliance architecture</li>
            <li>Hardware & software integration</li>
            <li>Cloud-ready with regulatory controls</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
