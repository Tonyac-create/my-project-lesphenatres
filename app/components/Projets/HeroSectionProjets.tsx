'use client'

import Image from "next/image";

export default function HeroSectionProjets() {
    return (
        <section className={`flex flex-col items-center pt-[8.125rem] mt-[5.875rem] text-white px-5 tracking-wide h-[650px] bg-[url(/fauteuil_theatre.webp)] bg-cover bg-center bg-fixed bg-no-repeat`}>
            <h2 className="md:w-3/4 font-dancing text-4xl leading-11 md:text-6xl text-center mt-5">{`Plongez dans l’univers du théâtre entre ateliers et représentations.`}</h2>
            <Image
                src="/icons/arrow-down-solid.svg"
                width={60}
                height={60}
                alt=""
                className="w-8 h-8 md:w-14 md:h-14 xl:w-16 xl:h-16 animate-bounce mt-28"
            />
        </section>
    );
}