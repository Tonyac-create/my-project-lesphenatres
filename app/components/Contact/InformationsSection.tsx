import Image from "next/image";
import FormContact from "../FormContact";
import Link from "next/link";

export default function InformationsSection() {
    return (
        <section className="mt-24 p-8 md:px-28 md:py-11 tracking-wide">
            <div className="flex flex-col md:flex-row gap-7">
                <div className="space-y-10 w-1/3">
                    <h2 className="text-4xl text-red font-bold mb-4 font-dancing">Informations pratiques</h2>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Lieu des répétitions</h3>
                        <p className="text-gray-700">
                            {`Office culturel d'Arras`}<br />
                            2, rue de la Douizième<br />
                            6200 Arras
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                        <p className="font-semibold">
                            Atelier enfants à partir de 7 ans
                        </p>
                        <p className="text-gray-700">
                            1 mercredi sur 2 de 17h30 à 19h00<br />
                            Le samedi de 10h00 à 11h30
                        </p>
                        <p className="font-semibold mt-6">
                            Atelier ados/adultes
                        </p>
                        <p className="text-gray-700">
                            Le mardi de 19h00 à 21h00<br />
                            Le samedi de 14h00 à 16h00
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Cotisation annuelle (dès février 2025, profitez du tarif à moitié prix.)</h3>
                        <p className="text-gray-700 mb-4 italic">
                            Vous avez 4 séances gratuites avant inscription définitive
                        </p>
                        <p className="text-gray-700">
                            50 € tarif normal<br />
                            30 € enfants/étudiants avec justificatif<br />
                            {`40€ demandeurs d'emplois/personnes en situation de handicap/retraités avec justificatif`}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">{`Conditions d'inscription`}</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>À partir de 16 ans</li>
                            <li>{`Pas d'expérience requise`}</li>
                            <li>Motivation & bonne humeur indispensables</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Nous contacter</h3>
                        <p className="text-gray-700">
                            📧 lesphenatresdelartois6200@gmail.com<br />
                            📞 06 68 37 70 32
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/lesphenatres" target="_blank" className="hover:text-blue-700 inline-flex items-center">
                                <Image
                                    src="/icons/Mask_facebook.webp"
                                    alt="Logo Facebook"
                                    width={50}
                                    height={50}
                                    quality={100}
                                    className="object-cover rounded-full mr-2 mb-3"
                                />
                                Facebook
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="https://www.tiktok.com/@lesphenatresdelartois?_t=ZN-8vLGTpttruQ&_r=1" target="_blank" className="hover:text-blue-700 inline-flex items-center">
                                <Image
                                    src="/icons/Mask_tiktok.webp"
                                    alt="Logo TikTok"
                                    width={50}
                                    height={50}
                                    quality={100}
                                    className="object-cover rounded-full mr-2"
                                />
                                TikTok
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <Image
                        src="/Logo_Phenatres.webp"
                        width={200}
                        height={200}
                        priority={true}
                        quality={100}
                        alt="Logo"
                        className="object-cover mx-auto"
                    />
                    <h2 className="text-4xl text-red font-bold mb-4 font-dancing">{`Un renseignement, une demande pour un spectacle ?`}</h2>
                    <FormContact />
                    <div className="mt-8">
                        <h3 className="text-2xl text-red font-bold">{`Téléchargez nos fiches d'inscription`}</h3>
                        <p className=" mb-4">A remplir et à envoyer par email ou nous les porter directement lors d'un atelier</p>
                        <div className="flex flex-col space-y-4">
                            <p className="font-semibold">Pour adulte</p>
                            <a
                                href="/pdf/droit_image_adulte.pdf"
                                download
                                className="inline-flex items-center text-gray-700 hover:text-red transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {`Droit à l'image`}
                            </a>
                            <a
                                href="/pdf/fiche_renseignement_adulte.pdf"
                                download
                                className="inline-flex items-center text-gray-700 hover:text-red transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {`Fiche de renseignement`}
                            </a>
                            <p className="font-semibold">Pour enfant</p>
                            <a
                                href="/pdf/droit_image_mineur.pdf"
                                download
                                className="inline-flex items-center text-gray-700 hover:text-red transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {`Droit à l'image mineur`}
                            </a>
                            <a
                                href="/pdf/Autorisation_de_sorti.pdf"
                                download
                                className="inline-flex items-center text-gray-700 hover:text-red transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {`Autorisation de sortie`}
                            </a>
                            <a
                                href="/pdf/fiche_renseignement_enfant.pdf"
                                download
                                className="inline-flex items-center text-gray-700 hover:text-red transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {`Fiche de renseignement enfant`}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}