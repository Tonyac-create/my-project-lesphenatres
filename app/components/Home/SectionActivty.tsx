'use client'

import Image from "next/image";
import { useEffect } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Button from "../Button";

export default function SectionActivty() {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, []);

    return (
        <section className="relative flex flex-col items-start gap-6 p-8 md:px-28 md:py-11 tracking-wide">
            <h3 className="font-dancing text-red text-3xl md:text-5xl mb-3.5 font-semibold flex mr-auto">Nos activités</h3>
            <div className="relative w-3/4 slide-from-right">
                <div className="p-6 bg-red text-white">
                    <h2 className="text-2xl font-bold">Ateliers Adultes</h2>
                    <p className="text-lg md:text-xl">{`Séances d'improvisations, travail sur textes et pièce écrite, réalisée, mise en scène et jouée par notre troupe !`}</p>
                </div>
                <Image
                    src="/ateliers-les-phenatres.webp"
                    width={500}
                    height={500}
                    alt="Atelier théâtre adultes"
                    className="w-full h-80 object-cover object-top clip-bottom-left"
                />
            </div>
            <div className="relative w-3/4 mt-[-335px] mb-8 slide-from-left">
                <Image
                    src="/nid-hibou.webp"
                    width={500}
                    height={500}
                    alt="Atelier théâtre enfants"
                    className="w-full h-80 object-cover object-bottom clip-diagonal-right"
                />
                <div className="p-6 bg-black text-white">
                    <h2 className="text-2xl font-bold">Ateliers Enfants</h2>
                    <p className="text-lg md:text-xl">{`Des travaux sur textes et de l'improvisation pour apprendre le théâtre en s’amusant !`}</p>
                </div>
            </div>
            <Button href="/projets" variant="secondary">Je veux rejoindre la troupe</Button>
            <h3 className="font-dancing text-red text-3xl md:text-5xl mt-8 mb-3.5 font-semibold flex mr-auto">Des spectacles engagés ! De l'improvisation !!</h3>
            <div className="flex flex-col lg:flex-row gap-8">
                <article className="lg:w-[30%]">
                    <h3 className="text-2xl md:text-4xl text-red">Écologie et dévelopement durable</h3>
                    <p className="text-2xl">Un spectacle avec un sujet qui parle à tout le monde...</p>
                </article>
                <div className="relative lg:w-[40%] h-[500px] overflow-hidden group rounded-3xl transition-shadow duration-1500 hover:shadow-[0_0_20px_rgba(192,10,50,1)] curtain-container">
                    <Image
                        src="/Rideau_theatre.webp"
                        width={500}
                        height={500}
                        alt="Rideau gauche"
                        className="absolute top-0 left-0 w-1/2 h-full object-cover object-left transition-transform duration-1500 md:group-hover:-translate-x-full curtain-left"
                    />
                    <Image
                        src="/Rideau_theatre.webp"
                        width={500}
                        height={500}
                        alt="Rideau droite"
                        className="absolute top-0 right-0 w-1/2 h-full object-cover object-right transition-transform duration-1500 md:group-hover:translate-x-full curtain-right"
                    />
                    <Image
                        src="/representation-phenatres.webp"
                        width={500}
                        height={500}
                        alt="Image représentation"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <article className="lg:w-[30%]">
                    <h3 className="text-2xl md:text-4xl text-red">Le harcélement</h3>
                    <p className="text-2xl">Écrit, réalisé, mise en scène par la troupe...</p>
                </article>
            </div>
        </section>
    )
}