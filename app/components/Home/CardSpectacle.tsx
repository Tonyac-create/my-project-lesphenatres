'use client'

import Image from "next/image";
import { useEffect } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

type CardSpectacleProps = {
    description: string;
    imageRideau: string;
    image3: string;
}

export default function CardSpectacle({ description, imageRideau, image3 }: CardSpectacleProps) {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, [observeElements]);

    return (
        <article className="relative">
                <p className="text-2xl mb-4 text-center">{description}</p>
            <div className="relative overflow-hidden rounded-3xl transition-shadow duration-1500 curtain-container">
                <Image
                    src={imageRideau}
                    width={500}
                    height={500}
                    alt="Rideau gauche"
                    className="absolute top-0 left-0 w-1/2 h-full object-cover object-left transition-transform duration-1500  curtain-left"
                />
                <Image
                    src={imageRideau}
                    width={500}
                    height={500}
                    alt="Rideau droite"
                    className="absolute top-0 right-0 w-1/2 h-full object-cover object-right transition-transform duration-1500  curtain-right"
                />
                <Image
                    src={image3}
                    width={500}
                    height={500}
                    alt="Image représentation"
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </article>
    )
}