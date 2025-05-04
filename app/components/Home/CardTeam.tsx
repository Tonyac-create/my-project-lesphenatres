'use client'

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Image from "next/image";
import { useEffect } from "react";

type CardTeamProps = {
    src: string;
    alt: string;
    name: string;
    role: string;
    description: string;
}

export default function CardTeam({ src, alt, name, role, description }: CardTeamProps) {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, [observeElements]);
    
    return (
        <article className="flex flex-col justify-center items-center w-[350px] p-6">
            <Image
                src={src}
                width={250}
                height={250}
                alt={alt}
                className="w-[250px] h-[250px] object-cover rounded-full mx-auto animate-blur-in custom-shadow"
            />
            <h3 className="text-red text-3xl mt-5 mb-3 font-dancing font-semibold">{name}</h3>
            <p className="text-2xl text-black">{role}</p>
            <p className="text-xl text-black text-center">{description}</p>
        </article>
    )
}