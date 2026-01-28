export const metadata = {
  title: "Contact | NexAccess Global System",
  description:
    "Contact NexAccess Global System for partnerships and enterprise deployments.",
};

const BRAND = {
  blueDark: "#0B1F3B",
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "42px", color: BRAND.blueDark, marginBottom: "24px" }}>
        Contact Us
      </h1>

      <p style={{ fontSize: "18px", color: "#374151", marginBottom: "48px" }}>
        For partnerships, enterprise deployments, or investor discussions,
        please reach out using the details below.
      </p>

      <section
        style={{
          background: "#F9FAFB",
          padding: "32px",
          borderRadius: "16px",
        }}
      >
        <p><strong>Email:</strong> partnerships@nexaccessglobal.com</p>
        <p><strong>Region:</strong> Nigeria & Africa</p>
        <p><strong>Focus:</strong> Banks, hospitals, malls, enterprise campuses</p>
      </section>

      <footer
        style={{
          marginTop: "80px",
          textAlign: "center",
          fontSize: "14px",
          color: "#6B7280",
        }}
      >
        © 2026 NexAccess Global System
      </footer>
    </main>
  );
}
