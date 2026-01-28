import "./globals.css";

export const metadata = {
  title: "NexAccess Global System",
  description:
    "Unified access control and payments infrastructure for banks, hospitals, enterprises, and governments across Africa.",
  openGraph: {
    title: "NexAccess Global System",
    description:
      "Secure, compliant access control and payment platforms across Africa.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* NAV */}
        <header
          style={{
            background: "white",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            <div style={{ fontWeight: 800 }}>
              NexAccess
              <div style={{ fontSize: "12px", opacity: 0.6 }}>
                GLOBAL SYSTEM
              </div>
            </div>

            <nav style={{ display: "flex", gap: "24px" }}>
              <a href="/">Home</a>
              <a href="/investors">Investors</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
