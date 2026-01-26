export const metadata = {
  title: "NexAccess",
  description: "NexAccess Global System official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
