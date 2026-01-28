import "./globals.css";

export const metadata = {
  title: "NexAccess Global System",
  description:
    "Unified access control and payment infrastructure for banks, hospitals, enterprises, and governments across Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <div className="logo">
              NexAccess
              <span>GLOBAL SYSTEM</span>
            </div>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/investors">Investors</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </header>

        {children}

        <footer className="footer">
          © 2026 NexAccess Global System
        </footer>
      </body>
    </html>
  );
}
