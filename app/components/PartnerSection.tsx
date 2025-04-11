'use client'

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect } from "react";

export default function PartnerSection() {
    const { observeElements } = useScrollAnimation();

    useEffect(() => {
        const observer = observeElements();
        return () => observer?.disconnect();
    }, [observeElements]);
    return (
        <section className=" mt-16 p-8 md:px-28">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">Merci à nos partenaires</h2>
            <div className="flex flex-wrap justify-center items-center gap-7 slide-from-left">
                <Link href="https://www.arras.fr/" target="_blank" className="partner-image" title="Voir le site">
                    <Image
                        src="/partners/Ville_Arras.webp"
                        width={200}
                        height={200}
                        priority={true}
                        quality={100}
                        alt="Ville d'Arras"
                        className="object-cover object-center"
                    />
                </Link>
                <Link href="https://www.officeculturelarras.fr/page/1690940-accueil" target="_blank" className="partner-image" title="Voir le site">
                    <Image
                        src="/partners/Office_Culturel_Arras.png"
                        width={200}
                        height={200}
                        priority={true}
                        quality={100}
                        alt="Office Culturel d'Arras"
                        className="object-cover object-center"
                    />
                </Link>
                <Link
                    href="https://www.facebook.com/Arras.Associations?locale=fr_FR"
                    target="_blank"
                    className="partner-image"
                    title="Voir la page Facebook">
                    <Image
                        src="/partners/Forum_Asso_arras.jpg"
                        width={200}
                        height={200}
                        priority={true}
                        quality={100}
                        alt="Forum des associations d'Arras"
                        className="object-cover object-center"
                    />
                </Link>
                <Link href="https://reptileblade.wixsite.com/reptileblade" target="_blank" className="partner-image" title="Voir le site">
                    <Image
                        src="/partners/Reptilblade.webp"
                        width={200}
                        height={200}
                        priority={true}
                        quality={100}
                        alt="ReptilBlade"
                        className="object-cover object-center"
                    />
                </Link>
                <Link href="https://www.free-dev.fr/" target="_blank" className="partner-image" title="Voir le site">
                    <Image
                        src="/partners/free.png"
                        width={200}
                        height={200}
                        priority={true}
                        quality={100}
                        alt="Free-dev"
                        className="object-cover object-center"
                    />
                </Link>
            </div>
            <div className="w-3/4 bg-red h-1 mx-auto mt-6"></div>
        </section>
    )
}