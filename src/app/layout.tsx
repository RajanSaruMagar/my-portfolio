import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajan Saru Magar | Portfolio",
  description:
    "Welcome to the personal portfolio of Rajan Saru Magar – Frontend Developer & Designer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <body>{children}</body>
    </html>
  );
}
