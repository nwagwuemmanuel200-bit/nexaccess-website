export const metadata = {
  title: "Contact | NexAccess",
};

export default function ContactPage() {
  return (
    <main style={page}>
      <h1>Contact NexAccess</h1>
      <p style={lead}>
        We engage with banks, enterprises, governments, and strategic partners
        across Africa.
      </p>

      <ul style={{ marginTop: 30 }}>
        <li>Email: info@nexaccessglobal.com</li>
        <li>Region: Nigeria & Africa</li>
        <li>Focus: Banks, hospitals, government</li>
      </ul>
    </main>
  );
}

const page = { padding: "80px 40px", maxWidth: 900, margin: "auto" };
const lead = { fontSize: 18, opacity: 0.8 };
