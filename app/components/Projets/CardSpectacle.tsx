'use client'

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Image from "next/image";
import { useEffect } from "react";

type spectacleProps = {
    src: string,
    title: string,
    description: string,
    description2: string,
    description3?: string
}

export default function CardSpectacle({ src, title, description, description2, description3 }: spectacleProps) {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, [observeElements]);

    return (
        <article>
            <div className="animation-down animation-down-1">
                <Image
                    src={src}
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                    alt={title}
                    className="object-cover mb-8 rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                />
            </div>
            <h2 className="animation-down animation-down-2 font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">{title}</h2>
            <p className="animation-down animation-down-3 text-lg w-[80%]">{description}</p>
            <p className="animation-down animation-down-4 text-lg w-[80%] mt-5 italic">{`" ${description2} "`}</p>
            <p className="animation-down animation-down-5 text-lg w-[80%] mt-5">{description3}</p>
        </article>
    )
}