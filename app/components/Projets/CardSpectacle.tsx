'use client'

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Image from "next/image";
import { useEffect, useState } from "react";

type spectacleProps = {
    pictures: string[],
    title: string,
    description: string,
    description2: string,
    description3?: string
}

export default function CardSpectacle({ pictures, title, description, description2, description3 }: spectacleProps) {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, [observeElements]);


    return (
        <article>
            <h2 className="animation-down animation-down-2 font-dancing text-black text-3xl md:text-5xl mb-5 font-semibold">{title}</h2>

            {/* Premières images (2) */}
            <div className="animation-down animation-down-1 flex flex-col md:flex-row justify-center gap-4 mb-8">
                {pictures.length >= 1 && (
                    <div className="animation-down animation-down-1 grid grid-cols-1 md:grid-cols-2 gap-14 mb-8">
                        {pictures.slice(0, 2).map((picture, index) => (
                            <Image
                                key={index}
                                src={picture}
                                width={500}
                                height={500}
                                priority={index === 0}
                                quality={100}
                                alt={`${title} - image ${index + 1}`}
                                className={`object-cover rounded-xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.7)] ${
                                    pictures.length === 1 
                                    ? "w-full h-full" 
                                    : "w-[400px] h-[300px]"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Description */}
            <p className="animation-down animation-down-3 text-lg w-[80%] mb-8">{description}</p>

            {/* Images du milieu (2) */}
            <div className="animation-down animation-down-4 flex flex-col md:flex-row justify-center gap-14 mb-8">
                {pictures.slice(2, 4).map((picture, index) => (
                    <Image
                        key={index + 2}
                        src={picture}
                        width={500}
                        height={500}
                        priority={false}
                        quality={100}
                        alt={`${title} - image ${index + 3}`}
                        className="object-cover w-1/3 rounded-xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.7)]"
                    />
                ))}
            </div>

            {/* Description 2 */}
            <p className="animation-down animation-down-5 text-lg w-[80%] mb-8 italic">{`" ${description2} "`}</p>

            {/* Dernière image */}
            <div className="animation-down animation-down-4 flex flex-col md:flex-row justify-center mb-8">
                {pictures[4] && (
                    <Image
                        src={pictures[4]}
                        width={500}
                        height={500}
                        priority={false}
                        quality={100}
                        alt={`${title} - image 5`}
                        className="object-cover w-1/3 rounded-xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.7)]"
                    />
                )}
            </div>

            {/* Description 3 */}
            <p className="animation-down animation-down-7 text-lg w-[80%]">{description3}</p>
        </article>
    )
}