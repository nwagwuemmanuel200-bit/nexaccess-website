export const metadata = {
  title: "Investors | NexAccess Global System",
  description:
    "Investor and partner overview of NexAccess Global System — unified access control, payments, and smart infrastructure for banks, hospitals, malls, and enterprise campuses in Africa.",
};

// updated investors page
export default function InvestorsPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "80px 20px",
        lineHeight: "1.7",
        background: "#F7F9FC",
        borderRadius: "24px"
      }}
    >

      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>
  Investor Overview
</h1>

      <section
  style={{
    marginBottom: "64px",
    paddingBottom: "32px",
    borderBottom: "1px solid #E5E7EB"
  }}
>
        <h2 style={{ color: "#0B1F3B" }}>Company Overview</h2>
        <p>
          NexAccess Global System builds secure access control and payment
          infrastructure for banks, hospitals, malls, and enterprise facilities
          across Nigeria.
        </p>
      </section>

      <section
  style={{
    marginBottom: "64px",
    paddingBottom: "32px",
    borderBottom: "1px solid #E5E7EB"
  }}
>
        <h2>Problem</h2>
        <ul>
          <li>Fragmented access and payment systems</li>
          <li>Security risks in regulated environments</li>
          <li>Poor integration between physical and financial access</li>
        </ul>
      </section>

      <section
  style={{
    marginBottom: "64px",
    paddingBottom: "32px",
    borderBottom: "1px solid #E5E7EB"
  }}
>
        <h2>Solution</h2>
        <ul>
          <li>Unified access + payments platform</li>
          <li>Bank-grade compliance approach</li>
          <li>Hardware + software integration model</li>
        </ul>
      </section>

      <section
  style={{
    marginBottom: "64px",
    paddingBottom: "32px",
    borderBottom: "1px solid #E5E7EB"
  }}
>
        <h2>Target Markets</h2>
        <ul>
          <li>Banks & financial institutions</li>
          <li>Hospitals & healthcare networks</li>
          <li>Commercial real estate & malls</li>
          <li>Government & enterprise campuses</li>
        </ul>
      </section>

      <section
  style={{
    marginBottom: "64px",
    paddingBottom: "32px",
    borderBottom: "1px solid #E5E7EB"
  }}
>
        <section
  style={{
    marginBottom: "64px",
    paddingBottom: "32px",
    borderBottom: "1px solid #E5E7EB"
  }}
>
  <h2>Investor Highlights</h2>
  <ul>
    <li>Multi-sector platform spanning banking, healthcare, and smart infrastructure</li>
    <li>Hybrid revenue model: hardware, software, and recurring services</li>
    <li>Strong alignment with regulated environments and compliance requirements</li>
    <li>Designed for scalable deployment across Nigeria and Africa</li>
  </ul>
</section>

      <section style={{ marginBottom: "64px" }}>
  <h2>Partnerships</h2>
  ...
</section>
  <section
  style={{
    marginTop: "80px",
    padding: "48px",
    background: "#0B1F3B",
    borderRadius: "24px",
    color: "white",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
    Partner or Invest with NexAccess
  </h2>

  <p style={{ maxWidth: "700px", margin: "0 auto 32px", opacity: 0.9 }}>
    We are actively exploring strategic partnerships, pilot deployments,
    and growth capital to scale secure access and payment infrastructure
    across Africa.
  </p>

  <a
    href="/contact"
    style={{
      background: "white",
      color: "#0B1F3B",
      padding: "14px 28px",
      borderRadius: "12px",
      fontWeight: 600,
      textDecoration: "none"
    }}
  >
    Contact the Team
  </a>
</section>

    </main>
  );
}
