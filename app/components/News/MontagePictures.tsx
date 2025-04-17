'use client';

import Image from "next/image";

export default function MontagePictures() {
    return (
        <article className="px-28 my-24">
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Image
                        src="/news/spectacle_270425.webp"
                        width={600}
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
                    <Image
                        src="/news/decembre_2024.webp"
                        width={500}
                        height={500}
                        alt="Montage des photos"
                        className="object-cover rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
                    />
                </div>
                <div className="flex flex-col gap-8">
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
                </div>
            </div>
        </article>
    );


}