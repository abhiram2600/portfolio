import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhiram Kasturi — Software Engineer",
  description:
    "Software Engineer @ Linq. I build AI-native products and ship production systems end to end.",
  openGraph: {
    title: "Abhiram Kasturi — Software Engineer",
    description:
      "Software Engineer @ Linq. I build AI-native products and ship production systems end to end.",
    type: "website",
  },
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
