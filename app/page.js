export default function Home() {
  return (
    <main style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>NexAccess Global System</h1>

      <p style={{ fontSize: "18px", marginTop: "16px" }}>
        Unified access control, payments, and smart infrastructure for banks,
        hospitals, malls, and enterprise campuses.
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
        <a href="/investors">Investor Overview</a>
        <a href="/contact">Contact Us</a>
      </div>
    </main>
  );
}
