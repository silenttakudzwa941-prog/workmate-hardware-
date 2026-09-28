import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workmate Hardware | By Far, We Are Better",
  description:
    "Workmate Hardware — quality hardware, building materials, tools and project solutions. By Far, We Are Better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}