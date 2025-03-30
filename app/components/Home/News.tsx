import Image from "next/image";

export default function News() {
    return (
        <section className="flex flex-col gap-6 p-8 md:px-28 md:py-11 tracking-wide">
            <h3 className="font-dancing text-red text-3xl md:text-5xl mb-3.5  font-semibold flex mr-auto">{`Suivez nous sur les réseaux sociaux`}</h3>
            <p className="text-lg md:text-2xl">{`Retrouvez les moments forts de la troupe, des répétitions aux grandes premières.`}</p>
            <p className="text-lg md:text-2xl">{`Rejoignez-nous sur les réseaux pour ne rien manquer du spectacle !`}</p>
            <div className="flex flex-col justify-center lg:flex-row gap-20 my-5">
                <a href="https://www.facebook.com/lesphenatres" target="_blank" className="group inline-flex items-center gap-2 text-2xl hover:text-red">
                    <Image
                        src="/Mask_facebook.webp"
                        width={100}
                        height={100}
                        alt="Facebook"
                        className="rounded-full transition-transform duration-300 group-hover:rotate-180"
                    />
                    Nous suivre sur Facebook
                </a>
                <a href="#" target="_blank" className="group inline-flex items-center gap-2 text-2xl hover:text-red">
                    <Image
                        src="/Mask_tiktok.webp"
                        width={100}
                        height={100}
                        alt="Tiktok"
                        className="rounded-full transition-transform duration-300 group-hover:rotate-180"
                    />
                    Nous suivre sur TikTok
                </a>
            </div>
        </section>
    )
}