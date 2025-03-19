'use client'

import MenuNavigation from './MenuNavigation';
import { useState } from 'react';
import Image from 'next/image'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white fixed w-full top-0 z-50 pt-5 xl:py-5">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className='text-red text-[1.625rem] font-semibold sm:text-[2.5rem] font-dancing'>Les Phénâtres de l'Artois</h1>
                    <nav className='hidden xl:flex space-x-8'>
                        <ul className='flex my-auto gap-11 text-2xl ml-auto'>
                            <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                        </ul>
                    </nav>
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="xl:hidden w-10 h-10"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <Image
                                    src="/xmark.svg"
                                    width={36}
                                    height={36}
                                    alt=""
                                    className='w-6 h-6 md:w-9 md:h-9 transition-transform duration-400 rotate-90 hover:rotate-180'
                                />
                            ) : (
                                <Image
                                    src="/bars.svg"
                                    width={36}
                                    height={36}
                                    alt=""
                                    className='w-6 h-6 md:w-9 md:h-9 transition-transform duration-400 hover:scale-110'
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`xl:hidden pt-3 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col items-center bg-white shadow-lg transform transition-transform duration-700 ease-in-out">
                    <ul className={`flex flex-col my-auto gap-5 text-2xl transition-all duration-700 transform 
                            ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                    </ul>
                </nav>
            </div>
        </header>
    )
}
