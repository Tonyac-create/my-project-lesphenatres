'use client'

import Image from "next/image";
import Button from "../Button";

export default function NewInformation() {
    return (
        <section className="my-9 p-8 md:px-20 md:pt-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl mb-5 lg:mb-7 font-semibold animate-bounce">{`NOUVEAU ! Un atelier théâtre fait sa rentrée aux Phénâtres de l'Artois ! 🎭`}</h2>
            <article className="flex flex-col-reverse lg:flex-row gap-5 text-black mb-12 rounded-md">
                <div className="lg:w-3/4">
                    <p className="text-lg md:text-xl xl:text-2xl">{`Votre enfant a envie de monter sur scène, de lâcher prise,
                    de rire, de créer avec d'autres ? Cette rentrée, on ouvre un tout nouvel atelier théâtre pour les enfants
                    à partir de 7 ans, animé avec passion par Fanny, membre bénévole de notre association !`}</p>
                    <p className="mt-4 text-lg md:text-xl xl:text-2xl">{`📅 Tous les mercredis, de 17h30 à 18h30`}</p>
                    <p className="mt-3 text-lg md:text-xl xl:text-2xl">{`📍 Office Culturel d'Arras`}</p>
                    <p className="mt-3 mb-10 text-lg md:text-xl xl:text-2xl">{`👦👧 À partir de 7 ans`}</p>
                    <p className="text-lg mb-4 md:text-xl xl:text-2xl">{`Dans une ambiance bienveillante et ludique, votre enfant découvrira l'expression, l'improvisation et la confiance en soi, tout en s'amusant et en se faisant de nouveaux copains de scène !`}</p>
                    <p className="text-lg mb-10 md:text-xl xl:text-2xl">{`🎬✨ Le théâtre, c'est une belle aventure pour grandir et s'épanouir : on serait ravis de l'accueillir parmi nous !`}</p>
                    <p className="text-lg mb-10 md:text-xl xl:text-2xl">{`👉 Pour plus d'infos ou pour inscrire votre enfant, cliquez ci-dessous !`}</p>
                    
                    <Button
                        href="/contact"
                        variant="secondary"
                        onClick={() => {
                            if (typeof window.plausible === 'function') {
                                window.plausible('click_history');
                            }
                        }}
                    >{`Nous contactez`}</Button>
                </div>
            </article>
        </section>
    )
}