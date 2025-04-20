import Image from "next/image";
import Button from "../Button";

export default function JoinsUsSection() {
    return (
        <section className="flex flex-col p-8 md:px-28 md:py-11 tracking-wide mb-14">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl mb-5 font-semibold">{`Rejoignez nous dans l'aventure`}</h2>
            <div className="flex flex-wrap">
                <div className="flex flex-col justify-start items-start border-b-2 pb-4 lg:border-b-0 lg:border-r-2 border-red pr-8">
                    <h3 className="text-xl mb-5">Découvrez notre programmation</h3>
                    <a href="https://www.facebook.com/lesphenatres" target="_blank" className="group inline-flex items-center gap-2 mb-3 text-lg md:text-xl xl:text-2xl hover:text-red">
                        <Image
                            src="/icons/Mask_facebook.webp"
                            width={50}
                            height={50}
                            alt="Facebook"
                            className="rounded-full transition-transform duration-300 group-hover:rotate-180"
                        />
                        Nous suivre sur Facebook
                    </a>
                    <a href="https://www.tiktok.com/@lesphenatresdelartois?_t=ZN-8vLGTpttruQ&_r=1" target="_blank" className="group inline-flex items-center gap-2 text-lg md:text-xl xl:text-2xl hover:text-red">
                        <Image
                            src="/icons/Mask_tiktok.webp"
                            width={50}
                            height={50}
                            alt="Tiktok"
                            className="rounded-full transition-transform duration-300 group-hover:rotate-180"
                        />
                        Nous suivre sur TikTok
                    </a>
                </div>
                <div className="flex flex-col justify-start items-start border-b-2 py-4 lg:border-b-0 lg:border-r-2 border-red px-8">
                    <h3 className="text-xl mb-5">{`Vous cherchez une troupe pour un événement ?`}</h3>
                    <Button href="/contact" variant="secondary">{`Organisons un spectacle ensemble !`}</Button>
                </div>
                <div className="flex flex-col justify-start items-start pl-8 pt-4">
                    <h3 className="text-xl mb-5">{`Vous aimez le théâtre ?`}</h3>
                    <Button href="/contact" variant="secondary">{`Rejoignez-nous !`}</Button>
                </div>
            </div>
        </section>
    )
}