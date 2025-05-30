import Image from "next/image";
import Button from "../Button";

export default function SectionProposition() {
    return (
        <section className="my-9 pt-8">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl mb-5 lg:mb-7 font-semibold flex mr-auto">{`Faites venir le théâtre dans votre entreprise, école ou collectivité !`}</h2>
            <p className="text-lg md:text-xl xl:text-2xl">{`Vous souhaitez offrir un moment culturel et divertissant à votre public ?
             Notre troupe de théâtre propose des spectacles adaptés aux Comités d’Entreprise (CE), écoles, administrations et autres structures.`}</p>
            <p className="text-lg md:text-xl xl:text-2xl mt-3">{`Deux spectacles écrits, mis en scène et joués par notre troupe :`}</p>
            <ul className="text-lg md:text-xl xl:text-2xl">
                <li>{`- “La vie d’Arlette de A à Bzzz“, un sepctacle pédagogique sur l'importance des abeilles aussi fragiles qu'utiles.`}</li>
                <li>{`- “L'enfer du décor“, destiné aux pré-ados et ados sur le harcèlement et ses répercussions.`}</li>
            </ul>
            <p className="text-lg md:text-xl xl:text-2xl mt-3">{`Nos représentations sont rémunérées et peuvent être adaptées à vos besoins :
             comédies, saynètes pédagogiques, spectacles interactifs… Nous nous engageons à vous offrir une prestation de qualité,
              mêlant émotion, humour et engagement artistique.`}</p>
            <div className="flex flex-col justify-center items-center md:flex-row gap-11 md:gap-24 mt-5 mb-10">
                <div className="w-[80%] md:w-[40%] md:h-[230px] p-7 flex flex-col justify-center items-center border-2 rounded-md border-red">
                    <Image
                        src="/icons/clapperboard.svg"
                        width={50}
                        height={50}
                        alt="Calendrier"
                        className="animate-pulse"
                    />
                    <p className="mt-4 text-lg md:text-xl xl:text-2xl text-center">{`Une préparation indispensable. Répétitions, mise en scène, logistique... Contactez-nous tôt !`}</p>
                </div>
                <div className="w-[80%] md:w-[40%] md:h-[230px] p-7 flex flex-col justify-center items-center border-2 rounded-md border-red">
                    <Image
                        src="/icons/calendar.svg"
                        width={50}
                        height={50}
                        alt="Clap cinéma"
                        className="animate-pulse"
                    />
                    <p className="my-4 text-lg md:text-xl xl:text-2xl text-center">{`Envie d’organiser un spectacle ? Parlons-en dès maintenant.`}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <Button
                    href="/contact"
                    variant="secondary"
                    onClick={() => {
                        if (typeof window.plausible === 'function') {
                            window.plausible('click_contact_to_spectacle');
                        }
                    }}
                >{`Un spectacle m'intéresse !`}</Button>
            </div>
        </section>
    )
}