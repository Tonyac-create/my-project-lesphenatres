import type { Metadata } from "next";
import InformationsSection from "../components/Contact/InformationsSection";
import PartnerSection from "../components/PartnerSection";

export const metadata: Metadata = {
    title: "Contact - Les Phénâtres de l'Artois",
    description: "Contactez la troupe de théâtre Les Phénâtres de l'Artois. Renseignements, inscriptions et informations sur nos activités théâtrales à Arras.",
    alternates: {
        canonical: '/contact',
    },
};

export default function Contact() {
    return (
        <main>
            <InformationsSection />
            <PartnerSection />
        </main>
    );
}