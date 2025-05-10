import type { Metadata } from "next";
import HeroSection from "../components/Philisophy/HeroSection";
import JoinsUsSection from "../components/Philisophy/JoinsUsSection";
import HistorySection from "../components/Philisophy/HistorySection";
import ValuesSection from "../components/Philisophy/ValuesSection";
import PhilosophySection from "../components/Philisophy/PhilisophySection";

export const metadata: Metadata = {
    title: "Notre Philosophie - Les Phénâtres de l'Artois",
    description: "Découvrez l'histoire, les valeurs et la philosophie des Phénâtres de l'Artois. Une troupe de théâtre passionnée qui partage son amour de la scène à Arras.",
    alternates: {
        canonical: '/philosophy',
    },
};

export default function Troupe() {
    return (
        <>
            <HeroSection />
            <HistorySection />
            <ValuesSection />
            <PhilosophySection />
            <JoinsUsSection />
        </>
    );
}