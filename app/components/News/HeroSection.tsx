'use client';

import Image from "next/image";

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
                    <h2 className="font-dancing text-[2.25rem] md:text-6xl text-center mt-5 slide-from-left slide-delay-300">
                        {`La troupe est en mouvement !`}
                    </h2>
                </div>
            </div>
        </section>
    );
}