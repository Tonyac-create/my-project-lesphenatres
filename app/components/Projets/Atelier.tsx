'use client';
import { useState } from 'react';
import Image from 'next/image';

interface AtelierProps {
    title: string;
    age: string;
    description: string;
    photos: string[];
}

export default function Atelier({ title, age, description, photos }: AtelierProps) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
        if (typeof window.plausible === 'function') {
            window.plausible('click_carousel_next', {
                props: {
                    atelier: title
                }
            });
        }
    };

    const previousPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
        if (typeof window.plausible === 'function') {
            window.plausible('click_carousel_prev', {
                props: {
                    atelier: title
                }
            });
        }
    };

    return (
        <article className={`flex flex-col gap-4 p-6 rounded-2xl lg:w-[500px] h-[500px] relative overflow-hidden`}>
            <div className="pr-8">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-500 mb-3.5">{age}</p>
                <p>{description}</p>
            </div>
            <div className="relative lg:w-full h-full">
                <div className="relative h-full w-full">
                    {photos && photos.length > 0 && (
                        <Image
                            src={photos[currentPhotoIndex]}
                            fill
                            alt={`${title} - Photo ${currentPhotoIndex + 1}`}
                            quality={100}
                            className="object-contain rounded-lg"
                        />
                    )}
                    <button
                        onClick={previousPhoto}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red rounded-full p-2 cursor-pointer hover:bg-opacity-90"
                        aria-label="Photo précédente"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red rounded-full p-2 cursor-pointer hover:bg-opacity-90"
                        aria-label="Photo suivante"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-center gap-2">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentPhotoIndex ? 'bg-red' : 'bg-black'
                        }`}
                        aria-label={`Aller à la photo ${index + 1}`}
                    />
                ))}
            </div>
        </article>
    );
}