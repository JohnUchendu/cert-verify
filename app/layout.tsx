import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certificate Verification – Chainalysis Academy",
  description: "Verify certificate authenticity for Chainalysis Academy courses",
  openGraph: {
    title: "Certificate Verification – Chainalysis Academy",
    description: "Verify certificate authenticity for Chainalysis Academy courses",
    url: "http://verify.skillljar.com/",
    siteName: "Chainalysis Academy",
    images: [
      {
        url: "/certificate.png",
        width: 1280,
        height: 960,
        alt: "Chainalysis Investigation Specialist Certification",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificate Verification – Chainalysis Academy",
    description: "Verify certificate authenticity for Chainalysis Academy courses",
    images: ["/certificate.png"],
  },
   icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
