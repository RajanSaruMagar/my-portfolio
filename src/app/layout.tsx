import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajan Saru Magar | Portfolio",
  description:
    "Welcome to the personal portfolio of Rajan Saru Magar – Frontend Developer & Designer.",
  keywords: [
    "Rajan Saru Magar",
    "Frontend Developer",
    "Web Designer",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rajan Saru Magar | Portfolio",
    description:
      "Explore the works and projects of Rajan Saru Magar, Frontend Developer & Designer.",
    url: "https://rajandesign.com",
    siteName: "Rajan Saru Magar Portfolio",
    images: [
      {
        url: "https://rajandesign.com/profile.png", // Full URL to your OG image
        width: 1200,
        height: 630,
        alt: "Rajan Saru Magar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Saru Magar | Portfolio",
    description:
      "Frontend Developer & Designer portfolio showcasing projects and skills.",
    images: ["https://rajandesign.com/twitter-image.png"], // Full URL to your Twitter card image
    creator: "@rajan_saru29761",
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
