export const metadata = {
  title: "Investors | NexAccess",
};

export default function InvestorsPage() {
  return (
    <main style={page}>
      <h1>Investor Overview</h1>
      <p style={lead}>
        NexAccess Global System is building secure, compliant access control
        and payment infrastructure for regulated environments across Africa.
      </p>

      <a href="/investor-deck.pdf" target="_blank" style={primaryBtn}>
        Download Investor Deck
      </a>

      <section style={cardSection}>
        <div style={card}>
          <h3>Enterprise Focus</h3>
          <p>Banks, hospitals, governments & campuses</p>
        </div>
        <div style={card}>
          <h3>OEM Partnerships</h3>
          <p>Certified hardware manufacturers</p>
        </div>
        <div style={card}>
          <h3>Africa-First Strategy</h3>
          <p>Nigeria entry → Pan-African expansion</p>
        </div>
      </section>
    </main>
  );
}

const page = { padding: "80px 40px", maxWidth: 900, margin: "auto" };
const lead = { fontSize: 18, opacity: 0.8 };

const primaryBtn = {
  display: "inline-block",
  marginTop: 30,
  background: "#081b33",
  color: "white",
  padding: "14px 28px",
  borderRadius: 10,
};

const cardSection = {
  display: "grid",
  gap: 24,
  marginTop: 60,
};

const card = {
  background: "#fff",
  padding: 30,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};
