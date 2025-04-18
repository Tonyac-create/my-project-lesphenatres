'use client';

import Image from "next/image";

export default function MontagePictures() {
    return (
        <article className="px-28 my-24">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">À venir</h2>
            <Image
                src="/news/spectacle_270425.webp"
                width={600}
                height={500}
                alt="Montage des photos"
                className="object-cover rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
            />
            <h2 className="font-dancing text-red text-3xl md:text-5xl mt-10 mb-5 font-semibold">Passés</h2>
            {/* <div className="grid grid-cols-2 gap-8"> */}
                <div className="flex flex-wrap gap-8">
                    <Image
                        src="/news/spectacle_260125.webp"
                        width={500}
                        height={600}
                        alt="Montage des photos"
                        className="object-cover rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                    />
                    <Image
                        src="/news/spectacle_151224.webp"
                        width={500}
                        height={500}
                        alt="Montage des photos"
                        className="object-cover rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                    />
                {/* </div>
                <div className="flex flex-col gap-8"> */}
                    <Image
                        src="/news/decembre_2024.webp"
                        width={500}
                        height={500}
                        alt="Montage des photos"
                        className="object-cover rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                    />
                    <Image
                        src="/news/spectacle_171124.webp"
                        width={600}
                        height={500}
                        alt="Montage des photos"
                        className="object-cover rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                    />
                </div>
            {/* </div> */}
        </article>
    );


}