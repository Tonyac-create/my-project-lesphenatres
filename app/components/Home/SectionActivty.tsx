'use client'

import Image from "next/image";
import { useEffect } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Button from "../Button";
import { spectacles } from "@/app/utils/spectacle";
import CardSpectacle from "./CardSpectacle";
import SectionProposition from "./SectionProposition";

export default function SectionActivty() {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, [observeElements]);

    return (
        <section className="relative flex flex-col items-start gap-6 p-8 md:px-28 md:py-11 tracking-wide">
            <h3 className="font-dancing text-red text-3xl md:text-5xl mb-3.5 font-semibold flex mr-auto">Nos activités</h3>
            <div className="relative w-3/4 slide-from-right">
                <div className="p-6 bg-red text-white">
                    <h2 className="text-2xl font-bold">Ateliers Adultes</h2>
                    <p className="text-lg md:text-xl">{`Séances d'improvisations, travail sur textes et pièce écrite, réalisée, mise en scène et jouée par notre troupe !`}</p>
                </div>
                <Image
                    src="/atelier_adulte.jpg"
                    width={500}
                    height={500}
                    alt="Atelier théâtre adultes"
                    className="w-full h-80 object-cover object-center clip-bottom-left"
                />
            </div>
            <div className="relative w-3/4 mt-[-335px] mb-8 slide-from-left">
                <Image
                    src="/enfant_atelier.jpg"
                    width={500}
                    height={500}
                    alt="Atelier théâtre enfants"
                    className="w-full h-80 object-cover object-top clip-diagonal-right"
                />
                <div className="p-6 bg-black text-white">
                    <h2 className="text-2xl font-bold">Ateliers Enfants</h2>
                    <p className="text-lg md:text-xl">{`Des travaux sur textes et de l'improvisation pour apprendre le théâtre en s’amusant !`}</p>
                </div>
            </div>
            <Button href="/projets" variant="secondary">Je veux rejoindre la troupe</Button>
            <SectionProposition />
            <h3 className="font-dancing text-red text-3xl md:text-5xl mt-8 mb-3.5 font-semibold flex mr-auto">{`Des spectacles engagés !`}</h3>
            <div className="flex flex-col justify-center lg:flex-row gap-8">
                {spectacles.map((spectacle) => (
                    <CardSpectacle
                        key={spectacle.id}
                        description={spectacle.description}
                        imageRideau={spectacle.imageRideau}
                        image3={spectacle.image2}
                    />
                ))}
            </div>
            <Button href="/projets" variant="secondary">Explorer les spectacles</Button>
        </section>
    )
}