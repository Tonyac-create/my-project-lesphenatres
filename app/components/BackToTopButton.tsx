'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-[5.5rem] right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300 z-50"
                    aria-label="Retour en haut de page"
                >
                    <Image
                        src="/arrow-up-solid.svg"
                        width={50}
                        height={50}
                        alt='Retour en haut de page'
                    />
                </button>
            )}
        </>
    )
}