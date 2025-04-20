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
        <section className="relative flex flex-col items-start gap-6 mb-9 px-8 md:px-28 md:pb-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl font-semibold flex mr-auto">Nos activités</h2>
            <div className="relative w-3/4 slide-from-right">
                <div className="p-6 bg-red text-white">
                    <h3 className="text-2xl font-bold">Ateliers Adultes</h3>
                    <p className="text-lg md:text-xl xl:text-2xl">{`Séances d'improvisations, travail sur textes et pièce écrite, réalisée, mise en scène et jouée par notre troupe !`}</p>
                </div>
                <Image
                    src="/atelier_adulte.webp"
                    width={500}
                    height={500}
                    alt="Atelier théâtre adultes"
                    className="w-full h-80 object-cover object-center clip-bottom-left"
                />
            </div>
            <div className="relative w-3/4 mt-[-335px] mb-8 slide-from-left">
                <Image
                    src="/enfant_atelier.webp"
                    width={500}
                    height={500}
                    alt="Atelier théâtre enfants"
                    className="w-full h-80 object-cover object-top clip-diagonal-right"
                />
                <div className="p-6 bg-black text-white">
                    <h3 className="text-2xl font-bold">Ateliers Enfants</h3>
                    <p className="text-lg md:text-xl xl:text-2xl">{`Des travaux sur textes et de l'improvisation pour apprendre le théâtre en s’amusant !`}</p>
                </div>
            </div>
            <Button href="/projets" variant="secondary">C'est quoi un atelier ?</Button>
            <SectionProposition />
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl mt-8 mb-3.5 font-semibold flex mr-auto">{`Des spectacles engagés !`}</h2>
            <div className="flex flex-col justify-center lg:flex-row gap-12">
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