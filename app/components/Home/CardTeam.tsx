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
                width={300}
                height={300}
                alt={alt}
                className="w-[250px] h-[250px] object-cover rounded-full mx-auto drop-shadow-[3px_7px_7px_rgba(0,0,0,0.7)] opacity-0"
            />
            <h4 className="text-red text-3xl my-3 font-dancing font-semibold">{name}</h4>
            <p className="text-2xl text-black">{role}</p>
            <p className="text-xl text-black text-center">{description}</p>
        </article>
    )
}