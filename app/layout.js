import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NexAccess Global System",
  description:
    "Unified access control and payments infrastructure for banks, hospitals, enterprises, and governments across Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="nav-container">
            <div className="logo">
              NexAccess
              <span>GLOBAL SYSTEM</span>
            </div>

            <nav>
              <Link href="/">Home</Link>
              <Link href="/investors">Investors</Link>
              <Link href="/contact">Contact</Link>
            </nav>
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
