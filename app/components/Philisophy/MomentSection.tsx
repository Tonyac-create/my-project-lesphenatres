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
        <div ref={momentRef} className="moment flex items-center justify-between space-x-8 opacity-0">
            <div className="flex-1/4 text-center">
                <p className="text-xl font-semibold">{title}</p>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className="flex-3/4">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={title}
                    className="rounded-lg shadow-md transition-all duration-500 transform hover:scale-105"
                />
            </div>
        </div>
    );
};

export default Moment;

