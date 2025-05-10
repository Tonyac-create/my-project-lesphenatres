import type { Metadata } from "next";
import HeroSectionProjets from "../components/Projets/HeroSectionProjets";
import SectionAtelier from "../components/Projets/SectionAtelier";
import SectionProjets from "../components/Projets/SectionProjets";
import TheatreParcours from "../components/Projets/TheatreParcours";

export const metadata: Metadata = {
    title: "Nos Projets - Les Phénâtres de l'Artois",
    description: "Découvrez les projets et ateliers des Phénâtres de l'Artois : théâtre, improvisation, créations originales et parcours artistiques à Arras.",
    alternates: {
        canonical: '/projets',
    },
};

export default function Projets() {
    return (
        <main>
            <HeroSectionProjets />
            <SectionAtelier />
            <TheatreParcours />
            <SectionProjets />
        </main>
    );
}