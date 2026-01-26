import "./globals.css";
import Script from "next/script";

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
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
