'use client';
import { useState } from 'react';
import Image from 'next/image';

interface PhotoGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    photos: string[];
}

export default function PhotoGallery({ isOpen, onClose, photos }: PhotoGalleryProps) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    if (!isOpen) return null;

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    };

    const previousPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative h-[600px] w-full">
                    <Image
                        src={photos[currentPhotoIndex]}
                        alt={`Photo ${currentPhotoIndex + 1}`}
                        fill
                        className="object-contain"
                    />
                    <button
                        onClick={previousPhoto}
                        className="bg-red absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextPhoto}
                        className="bg-red absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
