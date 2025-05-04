'use client';

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex justify-center items-center mt-[5.875rem] w-full h-[450px] bg-red">
            <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="slide-from-left gap-9 lg:gap-24 text-white flex flex-col md:flex-row">
                    <Image
                        src="/Logo_Phenatres.webp"
                        width={200}
                        height={200}
                        alt="Logo Les Phénâtres"
                        className="w-[150px] h-[150px]"
                    />
                    <div className="flex flex-col items-center w-[90%]">
                        <h2 className="font-dancing text-4xl leading-11 md:text-5xl text-center slide-from-left slide-delay-300">
                            {`La troupe est en mouvement !`}
                        </h2>
                        <Link href="https://www.facebook.com/lesphenatres" target="_blank" className="flex flex-row mt-12 text-xl text-white gap-3 items-center">
                            <Image
                                src="/icons/pouce_facebook.png"
                                width={50}
                                height={50}
                                alt=""
                                className="animate-bounce"
                            />
                            Liker notre page pour savoir ou et quand voir nos spectacles !
                        </Link>
                    </div>
                    <Image
                        src="/icons/Mask_NB.png"
                        width={200}
                        height={150}
                        alt=""
                        className="rotate-45"
                    />
                </div>
            </div>
        </section>
    );
}