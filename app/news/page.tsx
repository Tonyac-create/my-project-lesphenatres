import type { Metadata } from "next";
import HeroSectionNews from "../components/News/HeroSection";
import MontagePictures from "../components/News/MontagePictures";

export const metadata: Metadata = {
    title: "Actualités - Les Phénâtres de l'Artois",
    description: "Suivez les actualités des Phénâtres de l'Artois : nos spectacles, événements et moments de partage autour du théâtre à Arras.",
    alternates: {
        canonical: '/news',
    },
};

export default function News() {
    return (
        <>
            <HeroSectionNews />
            <MontagePictures />
        </>
    )
}