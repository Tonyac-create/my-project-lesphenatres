import Image from "next/image";
import Button from "../Button";

export default function SectionAbout() {
    return (
        <section className="flex flex-col items-center my-16 px-5 tracking-wide">
            <div className="w-[15.625rem] h-[15.625rem] rounded-md bg-[url(/fond_scene.webp)] bg-fixed bg-[auto_15.625rem] bg-no-repeat bg-center">
            </div>
            <article className="w-[18.75rem] bg-black text-white p-5 mb-12 rounded-md">
                <h3 className="font-dancing text-red text-3xl mb-3.5 font-semibold">Comment est née l'association ?</h3>
                <p>{`Née d’une envie de liberté artistique et d’un engagement fort pour le théâtre,
                    notre association a vu le jour officiellement la veille du premier confinement
                    de 2020. Cette première année compliquée nous a pourtant permis de poser des
                    bases solides et de préparer notre véritable lancement l’année suivante.`}</p>
                <p className="mt-3">{`Depuis, nous avons développé plusieurs ateliers pour partager notre passion
                    de la scène dont le théatre d'improvisation, également pour les enfants
                    où nous mêlons improvisation et travail sur texte en laissant une place importante à leur créativité.`}</p>
            </article>
            <Button href="/troupe" variant="secondary">Je veux en savoir plus</Button>
        </section>
    )
}