import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Government Portal - Official E-Government Services",
  description: "Access government services, pay taxes, apply for documents, and manage your citizen account online through our secure government portal.",
  keywords: "government services, e-government, citizen portal, tax filing, document services, public services",
  authors: [{ name: "Government Portal" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32' },
      { url: '/images/newlogo.png', sizes: 'any' }
    ],
    shortcut: '/images/newlogo.png',
    apple: '/images/newlogo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
