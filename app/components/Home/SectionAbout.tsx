'use client'

import Image from "next/image";
import Button from "../Button";

export default function SectionAbout() {
    return (
        <section className="my-9 p-8 md:px-20 md:pt-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl mb-5 lg:mb-7 font-semibold">{`Comment est née l'association ?`}</h2>
            <article className="flex flex-col-reverse lg:flex-row gap-5 text-black mb-12 rounded-md">
                <div className="lg:w-1/2">
                    <p className="text-lg md:text-xl xl:text-2xl">{`Notre association a été créée en 2020, au tristement célèbre moment de la pandémie
                 du covid 19, elle a été créée par un groupe de personnes voulant juste faire du théâtre et en partageant cette passion 
                 au plus grand nombre, tout en restant contrairement à une expérience précédente.`}</p>
                    <p className="mt-3 mb-10 text-lg md:text-xl xl:text-2xl">{`Le nom de l'association “Les phénâtres de l'Artois” est un mélange des 2 mots...`}</p>
                    <Button
                        href="/philosophy"
                        variant="secondary"
                        onClick={() => {
                            if (typeof window.plausible === 'function') {
                                window.plausible('Custom Event', {
                                    props: {
                                        action: 'click_button',
                                        target: 'philosophy',
                                        location: 'about_section'
                                    }
                                });
                            }
                        }}
                    >{`Toute l'histoire`}</Button>
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src="/fond_scene.webp"
                        width={500}
                        height={500}
                        loading="lazy"
                        alt="Scène avec projecteurs"
                        className="w-full h-full object-cover mb-8 rounded-xl drop-shadow-[3px_5px_5px_rgba(0,0,0,0.5)]"
                    />
                </div>
            </article>
        </section>
    )
}