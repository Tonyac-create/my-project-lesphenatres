'use client'

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useEffect } from "react";

export default function ValuesSection() {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, [observeElements]);

    return (
        <section className="flex flex-col mb-12 p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">Nos valeurs fondamentales</h2>
            <div className="flex flex-wrap gap-12 mt-5">
                <div className="flex flex-col justify-center items-center flip-card flip-1 opacity-0">
                    <Image
                        src="/heart.svg"
                        width={80}
                        height={80}
                        alt=""
                        className="drop-shadow-[3px_7px_7px_rgba(0,0,0,0.7)]"
                    />
                    <p className="text-xl mt-3">{`Jouer, vibrer, transmettre l'émotion`}</p>
                </div>
                <div className="flex flex-col justify-center items-center flip-card flip-2 opacity-0">
                    <Image
                        src="/shield.svg"
                        width={80}
                        height={80}
                        alt=""
                        className="drop-shadow-[3px_7px_7px_rgba(0,0,0,0.7)]"
                    />
                    <p className="text-xl mt-3">Un théâtre accessible et inclusif</p>
                </div>
                <div className="flex flex-col justify-center items-center flip-card flip-3 opacity-0">
                    <Image
                        src="/star.svg"
                        width={89}
                        height={89}
                        alt=""
                        className="drop-shadow-[3px_7px_7px_rgba(0,0,0,0.7)]"
                    />
                    <p className="text-xl mt-3">Raconter des histoires autrement</p>
                </div>
                <div className="flex flex-col justify-center items-center flip-card flip-4 opacity-0">
                    <Image
                        src="/arrow-rotate-right.svg"
                        width={80}
                        height={80}
                        alt=""
                        className="drop-shadow-[3px_7px_7px_rgba(0,0,0,0.7)]"
                    />
                    <p className="text-xl mt-3">Un lien unique entre acteurs et spectateurs</p>
                </div>
            </div>
        </section>
    )
}