import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row md:justify-between px-6  bg-white text-black text-center p-4">
            <div className="flex flex-col md:flex-row gap-4">
                <Image
                    src="/Logo_Phenatres.webp"
                    alt="Logo Les Phénâtres"
                    width={100}
                    height={100}
                    className="object-cover"
                />
                <div className="flex flex-col items-start">
                    <h3>
                        {`Les Phénatres de l'Artois`}
                    </h3>
                    <p>2 rue de la Douizième 62 000 Arras</p>
                    <p>
                        {`Email : lesphenatresdelartois62000@gmail.com`}
                    </p>
                    <p>
                        {`Téléphone : 06 68 37 70 32`}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <p>Suivez nos actualités</p>
                <div className="flex gap-4">
                    <Link href="https://www.facebook.com/lesphenatres" target="_blank" className="hover:text-blue-700 inline-flex items-center">
                        <Image
                            src="/icons/Mask_facebook.webp"
                            alt="Logo Facebook"
                            width={50}
                            height={50}
                            quality={100}
                            className="object-cover rounded-full mr-2"
                        />
                        Facebook
                    </Link>
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
            <div className="flex flex-col gap-4">
                <Link href="/mentions" className="hover:text-red">Mentions légales</Link>
                <p className="font-semibold">&copy;{`2025 Les Phénâtres de l'Artois. Tous droits reservés.`}</p>
            </div>
        </footer>
    )
}