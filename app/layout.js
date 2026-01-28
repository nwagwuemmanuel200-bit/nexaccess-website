export const metadata = {
  title: "NexAccess Global System",
  description:
    "Secure, compliant access control and payment infrastructure for banks, hospitals, enterprises, and governments across Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, sans-serif",
          background: "#f7f9fc",
          color: "#0b1f3b",
        }}
      >
        {/* NAVBAR */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <nav
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong>NexAccess<br />GLOBAL SYSTEM</strong>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="/" style={{ textDecoration: "none", color: "#0b1f3b" }}>
                Home
              </a>
              <a
                href="/investors"
                style={{ textDecoration: "none", color: "#0b1f3b" }}
              >
                Investors
              </a>
              <a
                href="/contact"
                style={{ textDecoration: "none", color: "#0b1f3b" }}
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        {children}

        {/* FOOTER */}
        <footer
          style={{
            padding: "40px 24px",
            textAlign: "center",
            fontSize: "14px",
            color: "#64748b",
          }}
        >
          © 2026 NexAccess Global System
        </footer>
      </body>
    </html>
  );
}
