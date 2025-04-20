import Image from "next/image";
import Link from "next/link";

export default function News() {
    return (
        <section className="flex flex-col gap-6 mb-9 px-8 md:px-28 md:pb-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl font-semibold flex mr-auto">{`Suivez nous sur les réseaux sociaux`}</h2>
            <div className="flex flex-col gap-2">
                <p className="text-lg md:text-xl xl:text-2xl">{`Retrouvez les moments forts de la troupe, des répétitions aux grandes premières.`}</p>
                <p className="text-lg md:text-xl xl:text-2xl">{`Rejoignez-nous sur les réseaux pour ne rien manquer du spectacle !`}</p>
            </div>
            <div className="flex flex-col justify-center lg:flex-row gap-5 xl:gap-20 my-5">
                <Link href="https://www.facebook.com/lesphenatres" target="_blank" className="group inline-flex items-center gap-2 text-xl hover:text-red">
                    <Image
                        src="/icons/Mask_facebook.webp"
                        width={100}
                        height={100}
                        alt="Facebook"
                        className="rounded-full transition-transform duration-300 group-hover:rotate-180"
                    />
                    Nous suivre sur Facebook
                </Link>
                <Link href="https://www.tiktok.com/@lesphenatresdelartois?_t=ZN-8vLGTpttruQ&_r=1" target="_blank" className="group inline-flex items-center gap-2 text-xl hover:text-red">
                    <Image
                        src="/icons/Mask_tiktok.webp"
                        width={100}
                        height={100}
                        alt="Tiktok"
                        className="rounded-full transition-transform duration-300 group-hover:rotate-180"
                    />
                    Nous suivre sur TikTok
                </Link>
                <Link href="https://www.instagram.com/lesphenatresdelartois/?igsh=MXZwY21xeXZhOW80Ng%3D%3D#" target="_blank" className="group inline-flex items-center gap-2 text-xl hover:text-red">
                    <Image
                        src="/icons/Mask_Instagram.webp"
                        width={100}
                        height={100}
                        alt="Tiktok"
                        className="rounded-full transition-transform duration-300 group-hover:rotate-180"
                    />
                    Nous suivre sur Instagram
                </Link>
            </div>
        </section>
    )
}