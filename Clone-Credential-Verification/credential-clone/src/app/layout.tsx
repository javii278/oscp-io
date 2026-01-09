import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredible - Certificates ",
  description: " Accredible - Certificates ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/accredible.jpeg" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* Header con logo y título */}
        <header className="flex items-center gap-2 p-4 bg-white shadow-md">
          <img
            src="/accredible.jpeg"
            alt="OSCP Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-bold">Accredible - Certificates and Badges</h1>
        </header>

        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

