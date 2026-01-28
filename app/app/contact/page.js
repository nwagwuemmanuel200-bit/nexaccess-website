export const metadata = {
  title: "Investor Relations | NexAccess Global System",
  description:
    "Contact NexAccess Global System investor relations for partnerships and investment inquiries.",
};

export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "80px 24px",
        lineHeight: "1.7",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "24px" }}>
        Investor Relations
      </h1>

      <p style={{ fontSize: "18px", color: "#444", marginBottom: "40px" }}>
        NexAccess Global System welcomes strategic investors, institutional
        partners, and infrastructure stakeholders.
      </p>

      <section
        style={{
          background: "#F7F9FC",
          padding: "32px",
          borderRadius: "16px",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Contact Details</h2>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:invest@nexaccess.com">
            invest@nexaccess.com
          </a>
        </p>

        <p>
          <strong>Focus Markets:</strong> Nigeria & Africa
        </p>

        <p>
          <strong>Company:</strong> NexAccess Global System Ltd
        </p>
      </section>
    </main>
  );
}
