export const metadata = {
  title: "Contact | NexAccess",
};

export default function ContactPage() {
  return (
    <main className="fade-in">
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
            Contact NexAccess
          </h1>

          <p style={{ maxWidth: "640px", fontSize: "18px" }}>
            We engage with banks, enterprises, governments, and
            strategic partners across Africa.
          </p>

          <ul
            style={{
              marginTop: "32px",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            <li>Email: info@nexaccessglobal.com</li>
            <li>Region: Nigeria & Africa</li>
            <li>Focus: Banks, hospitals, government</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
