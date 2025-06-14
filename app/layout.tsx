import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export const metadata: Metadata = {
  title: "Les Phénâtres de l'Artois | Troupe de théâtre à Arras",
  description: "Découvrez la troupe de théâtre Les Phénâtres de l'Artois à Arras : improvisation et créations originales. Une passion pour la scène à partager.",
  metadataBase: new URL('https://lesphenatres.fr'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          defer
          data-domain="lesphenatres.fr"
          src="https://plausible.io/js/script.file-downloads.tagged-events.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
        </Script>
      </head>
      <body
        className={`font-lato antialiased`}
      >
        <NavBar />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
