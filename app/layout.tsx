import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/portfolio.png" />
        <title>Abhiram Kasturi</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
