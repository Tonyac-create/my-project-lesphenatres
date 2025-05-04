'use client'

import Image from "next/image";
import Button from "../Button";
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className={`pt-12 sm:pt-20 mt-[5.875rem] tracking-wide sm:h-screen pb-14 sm:pb-0 bg-[url(/Rideau_theatre.webp)] bg-cover bg-center}`}>
            <div className={`flex flex-col justify-center items-center text-white transition-opacity duration-3000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                    src="/Logo_Phenatres.webp"
                    width={300}
                    height={300}
                    quality={100}
                    priority
                    alt="Rideau de théâtre"
                    className="w-48 h-48 md:w-60 md:h-60 xl:w-72 xl:h-72 object-cover"
                />
                <h2 className="font-dancing text-4xl md:text-5xl xl:text-6xl text-center mt-6">{`Le théâtre prend vie sous vos yeux !`}</h2>
                <p className="text-center mt-4 text-lg md:text-xl xl:text-2xl w-[80%] xl:w-[60%]">{`Un espace où chacun progresse à son rythme, en s’amusant et sans prise de tête.
                 Ici, on vient comme on est, on crée, on improvise et surtout, on partage !`}</p>
                <div className="flex flex-col sm:flex-row gap-7 mt-12">
                    <Button href="/philosophy" variant="primary">Notre philosophie</Button> 
                    <Button href="/contact" variant="secondary">{`Besoin d'infos ?`}</Button>
                </div>
            </div>
        </section>
    )
}