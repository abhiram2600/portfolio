import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhiram Kasturi — Software Engineer",
  description:
    "Abhiram Kasturi — software engineer. i build the stuff you actually click. currently @ Linq.",
  openGraph: {
    title: "Abhiram Kasturi — Software Engineer",
    description: "i build the stuff you actually click. currently @ Linq.",
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
