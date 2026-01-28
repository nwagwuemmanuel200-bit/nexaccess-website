import "./globals.css";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: {
    default: "NexAccess Global System",
    template: "%s | NexAccess Global System",
  },
  description:
    "Unified access control, payments, and smart infrastructure solutions for banks, hospitals, malls, and enterprises in Nigeria.",
  keywords: [
    "access control Nigeria",
    "smart infrastructure",
    "banking technology Nigeria",
    "hospital access systems",
    "payment terminals",
    "enterprise security systems",
  ],
  authors: [{ name: "NexAccess Global System" }],
  creator: "NexAccess Global System",
  publisher: "NexAccess Global System",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CLTFGX6Z7T');
      `}
    </Script>
  </head>

  <body>
  <header className="site-header">
    <div className="logo">
      <strong>NexAccess</strong>
      <span>Global System</span>
    </div>

    <nav className="nav">
      <Link href="/">Home</Link>
<Link href="/investors">Investors</Link>
<Link href="/contact">Contact</Link>
    </nav>
  </header>

  {children}

  <footer className="site-footer">
    © {new Date().getFullYear()} NexAccess Global System
  </footer>
</body>
</html>
  );
}
