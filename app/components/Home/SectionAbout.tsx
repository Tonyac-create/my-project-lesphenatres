import Image from "next/image";
import Button from "../Button";

export default function SectionAbout() {
    return (
        <section className="flex flex-col md:flex-row items-center my-16 p-8 md:px-28 md:py-11 tracking-wide">
            <article className="lg:w-[50%] text-black p-5 mb-12 rounded-md">
                <h3 className="font-dancing text-red text-3xl md:text-5xl mb-3.5 font-semibold">{`Comment est née l'association ?`}</h3>
                <div className="lg:hidden">
                    <Image
                        src="/fond_scene.webp"
                        width={500}
                        height={500}
                        alt="Scène avec projecteurs"
                        className="w-full h-full object-cover mb-8 rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                    />
                </div>
                <p className="text-lg md:text-2xl">{`Notre association a été créée en 2020, au tristement célèbre moment de la pandémie
                 du covid 19, elle a été créée par un groupe de personnes voulant juste faire du théâtre et en partageant cette passion 
                 au plus grand nombre, tout en restant contrairement à une expérience précédente.`}</p>
                <p className="mt-3 mb-10 text-lg md:text-2xl">{`Le nom de l'association “Les phénâtres de l'Artois” est un mélange des 2 mots...`}</p>
                <Button href="/philosophy" variant="secondary">{`Toute l'histoire`}</Button>
            </article>
            <div className="hidden lg:flex lg:w-[50%]">
                <Image
                    src="/fond_scene.webp"
                    width={500}
                    height={500}
                    alt="Scène avec projecteurs"
                    className="w-full h-full object-cover mb-8 drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                />
            </div>
        </section>
    )
}