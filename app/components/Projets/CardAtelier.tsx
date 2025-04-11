'use client';

import Image from "next/image"
import PhotoGallery from '../PhotoGallery';
import { useState } from 'react';

type CardAtelierProps = {
    title: string,
    description: string,
    age: string,
    icon: string,
    photos: string[],
    className: string
}

export default function CardAtelier({ title, description, age, icon, photos, className }: CardAtelierProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <article className={`flex flex-col items-center p-6 ${className} rounded-2xl`}>
            <Image
                src={icon}
                width={100}
                height={100}
                alt={title}
                quality={100}
                className="object-cover mb-8"
            />
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-500 mb-3.5">{age}</p>
            <p>{description}</p>
            <div className="flex flex-col items-center justify-center">
                <button onClick={() => setIsGalleryOpen(true)} className="text-red hover:underline mt-5">
                    Gallerie photos
                </button>
                <PhotoGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} photos={photos} />
            </div>
        </article>
    )
}