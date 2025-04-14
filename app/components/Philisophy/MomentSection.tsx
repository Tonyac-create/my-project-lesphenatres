'use client'

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type MomentProps = {
    title: string;
    description: string;
    image: string;
}

const Moment = ({ title, description, image }: MomentProps) => {
    const momentRef = useRef(null);

    useEffect(() => {
        if (momentRef.current) { 
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slideIn');
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(momentRef.current);

            return () => observer.disconnect();
        }
    }, []);

    return (
        <div ref={momentRef} className="moment flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-4 md:space-y-0 opacity-0">
            <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-red ">{title}</h3>
                <p className="mt-2 text-gray-600 text-lg ">{description}</p>
            </div>
            <div className="ml-72 w-full md:w-1/3">
                <div className="relative">
                    <Image
                        src={image}
                        width={500}
                        height={400}
                        priority={true}
                        quality={100}
                        alt={title}
                        className="rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Moment;
