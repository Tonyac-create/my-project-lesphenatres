import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export const metadata: Metadata = {
  title: "Les Phénâtres de l'Artois",
  description: "Découvrez la troupe de théâtre Les Phénâtres de l'Artois à Arras : improvisation et créations originales. Une passion pour la scène à partager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
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
