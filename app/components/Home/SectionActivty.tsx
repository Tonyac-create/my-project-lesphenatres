'use client'

import Image from "next/image";
import { useEffect } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function SectionActivty() {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, []);

    return (
        <section className="relative flex flex-col items-center gap-6 p-6 tracking-wide">
            <h3 className="font-dancing text-red text-3xl mb-3.5 font-semibold flex mr-auto">Nos activités</h3>
            <div className="relative w-full slide-from-right">
                <div className="p-6 bg-red text-black">
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
            <div className="relative w-full mt-[-335px] slide-from-left">
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
            <h3 className="font-dancing text-red text-3xl my-3.5 font-semibold flex mr-auto">Des spectacles engagés ! De l'improvisation !!</h3>
            <div className="relative w-[700px] h-[500px] overflow-hidden group rounded-3xl transition-shadow duration-1500 hover:shadow-[0_0_20px_rgba(192,10,50,1)]">
                <Image
                    src="/Rideau_theatre.webp"
                    width={500}
                    height={500}
                    alt="Image Rideau"
                    className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-1500 group-hover:translate-x-full"
                />
                <Image
                    src="/representation-phenatres.webp"
                    width={500}
                    height={500}
                    alt="Image Rideau"
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </section>
    )
}