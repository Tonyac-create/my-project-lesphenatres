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
        <section className={`pt-[8.125rem] mt-[5.875rem] px-5 tracking-wide h-screen bg-[url(/Rideau_theatre.webp)] bg-cover bg-center}`}>
            <div className={`flex flex-col items-center text-white transition-opacity duration-3000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                    src="/Logo_Phenatres.webp"
                    width={300}
                    height={300}
                    alt="Rideau de théâtre"
                />
                <h2 className="font-dancing text-[2.25rem] md:text-6xl text-center mt-6">{`Le théâtre prend vie sous vos yeux !`}</h2>
                <p className="text-center mt-4 text-lg md:text-2xl lg:w-[80%] xl:w-[60%]">{`Un espace où chacun progresse à son rythme, en s’amusant et sans prise de tête.
                 Ici, on vient comme on est, on crée, on improvise et surtout, on partage !`}</p>
                <div className="flex flex-col sm:flex-row gap-7 mt-12">
                    <Button href="/philosophy" variant="primary">Notre philosophie</Button> 
                    <Button href="/contact" variant="secondary">{`Besoin d'infos ?`}</Button>
                </div>
            </div>
        </section>
    )
}