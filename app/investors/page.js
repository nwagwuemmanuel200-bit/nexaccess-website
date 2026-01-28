export const metadata = {
  title: "Investor Overview | NexAccess Global System",
  description: "Investor and partner overview of NexAccess Global System",
};

export default function InvestorsPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        lineHeight: 1.7,
      }}
    >
      {/* TITLE */}
      <h1 style={{ fontSize: "42px", marginBottom: "24px", color: "#0B1F3B" }}>
        Investor Overview
      </h1>

      {/* INTRO */}
      <p style={{ fontSize: "18px", maxWidth: "800px", marginBottom: "48px" }}>
        NexAccess Global System builds unified access control, payments, and smart
        infrastructure solutions for banks, hospitals, malls, and enterprise
        campuses across Nigeria and Africa.
      </p>

      {/* PROBLEM */}
      <section style={{ marginBottom: "48px" }}>
        <h2>Problem</h2>
        <ul>
          <li>Fragmented access and payment systems</li>
          <li>Security risks in regulated environments</li>
          <li>Poor integration between physical and financial access</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section style={{ marginBottom: "48px" }}>
        <h2>Solution</h2>
        <ul>
          <li>Unified access + payments platform</li>
          <li>Bank-grade compliance approach</li>
          <li>Hardware + software integration model</li>
        </ul>
      </section>

      {/* TARGET MARKETS */}
      <section style={{ marginBottom: "48px" }}>
        <h2>Target Markets</h2>
        <ul>
          <li>Banks & financial institutions</li>
          <li>Hospitals & healthcare networks</li>
          <li>Commercial real estate & malls</li>
          <li>Government & enterprise campuses</li>
        </ul>
      </section>

      {/* BUSINESS MODEL */}
      <section style={{ marginBottom: "48px" }}>
        <h2>Business Model</h2>
        <ul>
          <li>Hardware deployment & leasing</li>
          <li>Software & platform integration</li>
          <li>Maintenance & support contracts</li>
        </ul>
      </section>

      {/* CTA */}
      <section
        style={{
          marginTop: "64px",
          padding: "48px",
          background: "#0B1F3B",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Investor Materials
        </h2>

        <p style={{ maxWidth: "700px", margin: "0 auto 32px" }}>
          Download our investor presentation or contact us to discuss strategic
          partnerships.
        </p>

        {/* DOWNLOAD BUTTON */}
        <a
          href="/investor-deck.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "white",
            color: "#0B1F3B",
            padding: "14px 28px",
            borderRadius: "12px",
            fontWeight: 600,
            textDecoration: "none",
            marginRight: "16px",
          }}
        >
          Download Investor Deck
        </a>

        {/* CONTACT BUTTON */}
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "transparent",
            color: "white",
            padding: "14px 28px",
            borderRadius: "12px",
            fontWeight: 600,
            textDecoration: "none",
            border: "2px solid white",
          }}
        >
          Contact Investor Relations
        </a>
      </section>
    </main>
  );
}
