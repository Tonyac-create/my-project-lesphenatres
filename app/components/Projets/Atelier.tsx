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
    };

    const previousPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <article className={`flex flex-col gap-16 gap-16 p-6 rounded-2xl lg:w-[500px] h-[500px] relative overflow-hidden`}>
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
                            className="object-contain rounded-lg shadow-lg"
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
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPhotoIndex(index)}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentPhotoIndex ? 'bg-red' : 'bg-gray-300'
                                }`}
                                aria-label={`Aller à la photo ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}