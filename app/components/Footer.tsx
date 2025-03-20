import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row md:justify-between px-6  bg-white text-black text-center p-4">
            <div className="flex flex-col md:flex-row gap-4">
                <Image
                    src="/logo-phenatres.webp"
                    alt="Logo Les Phénâtres"
                    width={80}
                    height={80}
                />
                <div className="flex flex-col items-start">
                    <h3>
                        {`Les Phénatres de l'Artois`}
                    </h3>
                    <p>
                        {`Email : lesphenatresdelartois62000@gmail.com`}
                    </p>
                    <p>
                        {`Téléphone : 06 01 02 03 04`}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Link href="/mentions" className="hover:text-red">Mentions légales</Link>
                <Link href="https://www.facebook.com/lesphenatres" target="_blank" className="hover:text-red inline-flex items-center">
                    <Image
                        src="/Facebook.png"
                        alt="Logo Facebook"
                        width={50}
                        height={50}
                    />
                    Suivez nos actualités
                </Link>
            </div>
            <p>&copy; 2025 Les Phénâtres de l'Artois. Tous droits reservés.</p>
        </footer>
    )
}