import "./globals.css";

export const metadata = {
  title: "NexAccess Global System",
  description: "Unified access, payments, and smart infrastructure solutions"
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
