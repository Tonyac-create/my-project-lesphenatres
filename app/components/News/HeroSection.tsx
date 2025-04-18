'use client';

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex  mt-[5.875rem] w-full bg-red">
            <div className="mx-auto flex flex-col items-center justify-center py-16">
                <div className="slide-from-left gap-24 text-white flex flex-col items-center md:flex-row">
                    <Image
                        src="/Logo_phenatres.webp"
                        width={200}
                        height={200}
                        alt="Logo Les Phénâtres"
                    />
                    <div className="flex flex-col items-center">
                        <h2 className="font-dancing text-[2.25rem] md:text-6xl text-center mt-5 slide-from-left slide-delay-300">
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
                        width={300}
                        height={300}
                        alt=""
                        className="rotate-45"
                    />
                </div>
            </div>
        </section>
    );
}