'use client';

import Image from "next/image"
import PhotoGallery from '../PhotoGallery';
import { useState } from 'react';

type AtelierProps = {
    title: string,
    description: string,
    age: string,
    picture1: string,
    picture2: string,
    photos: string[],
    className: string
}

export default function Atelier({ title, description, age, className, picture1, picture2, photos }: AtelierProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <article className={`flex items-center ${className} p-6 rounded-2xl h-[500px] relative overflow-hidden`}>
            <div className="w-1/2 pr-8">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-500 mb-3.5">{age}</p>
                <p>{description}</p>
                <div className="flex flex-col items-start justify-center">
                    <button onClick={() => setIsGalleryOpen(true)} className="text-red hover:underline mt-5">
                        Gallerie photos
                    </button>
                    <PhotoGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} photos={photos} />
                </div>
            </div>
            <div className="relative w-1/2 h-full">
                <div className="relative h-full w-full">
                    <Image
                        src={picture2}
                        width={300}
                        height={400}
                        alt={title}
                        quality={100}
                        className="object-cover absolute top-0 left-0 rounded-lg shadow-lg"
                    />
                    <Image
                        src={picture1}
                        width={400}
                        height={500}
                        alt={title}
                        quality={100}
                        className="object-cover absolute top-52 right-32 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </article>
    )
}