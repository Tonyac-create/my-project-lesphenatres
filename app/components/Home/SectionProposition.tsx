import Image from "next/image";
import Button from "../Button";

export default function SectionProposition() {
    return (
        <section className="mt-5">
            <h3 className="font-dancing text-red text-3xl md:text-5xl mb-3.5 font-semibold flex mr-auto">{`Faites venir le théâtre dans votre entreprise, école ou collectivité !`}</h3>
            <p className="text-lg md:text-2xl">{`Vous souhaitez offrir un moment culturel et divertissant à votre public ? Notre troupe de théâtre propose des spectacles adaptés aux Comités d’Entreprise (CE), écoles, administrations et autres structures.`}</p>
            <p className="text-lg md:text-2xl">{`Nos représentations sont rémunérées et peuvent être adaptées à vos besoins : comédies, saynètes pédagogiques, spectacles interactifs… Nous nous engageons à vous offrir une prestation de qualité, mêlant émotion, humour et engagement artistique.`}</p>
            <div className="flex flex-col justify-center items-center md:flex-row gap-11 md:gap-24 mt-5">
                <div className="w-1/2 p-7 flex flex-col justify-center items-center bg-red text-white">
                    <Image
                        src="/clapperboard.svg"
                        width={50}
                        height={50}
                        alt="Calendrier"
                        className="animate-pulse"
                    />
                    <p className="mt-4 text-2xl">{`Chaque spectacle demande un temps de préparation (répétitions, mise en scène, logistique). 
                Pour garantir un événement réussi, nous vous recommandons de nous contacter à l’avance afin de définir
                ensemble la date, le format et les spécificités de votre demande.`}</p>
                </div>
                <div className="w-1/2 p-7 flex flex-col justify-center items-center bg-red text-white">
                    <Image
                        src="/calendar.svg"
                        width={50}
                        height={50}
                        alt="Clap cinéma"
                        className="animate-pulse"
                    />
                    <p className="my-4 text-2xl">{`Envie d’organiser un spectacle ? Contactez-nous dès maintenant pour en discuter et créer ensemble un moment inoubliable !`}</p>
                    <Button href="/contact" variant="primary">{`Je veux réserver un spectacle !`}</Button>
                </div>
            </div>
        </section>
    )
}