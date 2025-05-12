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
        <section className="relative pt-12 sm:pt-20 mt-[5.875rem] sm:h-screen pb-14 sm:pb-0 overflow-hidden">

            <Image
                src="/Rideau_theatre.webp"
                alt="Rideau de théâtre"
                fill
                priority
                quality={75}
                sizes="100vw"
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                className="object-cover object-center z-0"
            />


            <div className={`relative z-10 flex flex-col justify-center items-center text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                    src="/Logo_Phenatres.webp"
                    width={300}
                    height={300}
                    priority
                    alt="Logo du théâtre"
                    className="w-48 h-48 md:w-60 md:h-60 xl:w-72 xl:h-72 object-cover"
                />
                <h2 className="font-dancing text-4xl md:text-5xl xl:text-6xl text-center mt-6">
                    {`Le théâtre prend vie sous vos yeux !`}
                </h2>
                <p className="text-center mt-4 text-lg md:text-xl xl:text-2xl w-[80%] xl:w-[60%]">
                    {`Un espace où chacun progresse à son rythme, en s’amusant et sans prise de tête. Ici, on vient comme on est, on crée, on improvise et surtout, on partage !`}
                </p>
                <div className="flex flex-col sm:flex-row gap-7 mt-12">
                    <Button 
                        href="/philosophy" 
                        variant="primary"
                        onClick={() => {
                            if (typeof window.plausible === 'function') {
                                window.plausible('click_philosophy', {
                                    props: { location: 'hero_section' }
                                });
                            }
                        }}
                    >
                        Notre philosophie
                    </Button>
                    <Button 
                        href="/contact" 
                        variant="secondary"
                        onClick={() => {
                            if (typeof window.plausible === 'function') {
                                window.plausible('click_contact', {
                                    props: { location: 'hero_section' }
                                });
                            }
                        }}
                    >
                        {`Besoin d'infos ?`}
                    </Button>
                </div>
            </div>
        </section>
    )
}
