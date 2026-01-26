import "./globals.css";

export const metadata = {
  title: "NexAccess Global System",
  description:
    "Enterprise access, payment and smart infrastructure systems built for Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
