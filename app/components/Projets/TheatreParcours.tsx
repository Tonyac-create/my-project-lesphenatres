'use client'

import { useEffect, useRef } from 'react';

export default function TheatreParcours() {
    const stepsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.step-card');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-stone-50 min-h-screen">
            <div className="bg-red text-white py-12 px-4 text-center">
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-5 font-dancing">Les Deux Chemins du Théâtre</h2>
                <p className="text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto">
                    Dans notre association, nous avons un circuit bien défini pour chaque activité. Les ateliers sont liés à nos spectacles d’improvisation, tandis que nos projets parallèles suivent un parcours différent — c’est ce que nous allons vous expliquer un peu plus bas.
                    Les étapes générales restent globalement les mêmes, mais dans la mise en œuvre… c’est une autre planche. Vous avez la réf 
                </p>
            </div>

            <div className="container mx-auto px-4">
                {/* Titles for both paths - visible only on md and up */}
                <div className="hidden md:grid grid-cols-2 gap-8 mb-12">
                    <div className="mt-5">
                        <h3 className="text-2xl font-bold text-slate-800">Parcours Ateliers & Impro</h3>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-2xl font-bold text-slate-800">Parcours Projets Théâtraux</h3>
                    </div>
                </div>

                {/* Main content with paths */}
                <div className="relative">
                    {/* Vertical lines */}
                    <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-1 bg-red transform -translate-x-1/2"></div>
                    <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-1 bg-red transform -translate-x-1/2"></div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        {/* Left Path Title - visible only on mobile */}
                        <div className="text-center mb-8 md:hidden">
                            <h3 className="text-2xl mt-5 font-bold text-slate-800">Parcours Ateliers & Impro</h3>
                        </div>
                        
                        {/* Left Path - Step 1 */}
                        <div className="order-1 md:order-1 relative step-card opacity-0 translate-y-8 transition-all duration-700 ease-out">
                            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-red text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                <div className="hidden md:block absolute left-0 top-8 w-8 h-1 bg-red -translate-x-8"></div>
                                <h3 className="text-xl font-bold mb-4 text-slate-800">Formation du Groupe et Premiers Pas sur Scène</h3>
                                <p className="mb-3">Nous avons une première étape où l'on accueille tout le monde, petits et grands. On leur présente différents jeux théâtraux ainsi que diverses techniques que nous utilisons.</p>
                                <p className="mb-3">C'est aussi le moment où le groupe se forme, trouve ses marques, et apprend à développer ce qu'on appelle la cohésion de groupe — une base indispensable pour la création des futurs spectacles.</p>
                                <p className="font-semibold">Durée : Environ 4 mois, de septembre à décembre. Mais nous restons ouverts à l'accueil de nouveaux participants jusqu'en mars, avec une adhésion préférentielle.</p>
                            </div>
                        </div>

                        {/* Left Path - Step 2 */}
                        <div className="order-2 md:order-3 relative step-card opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 mt-8 md:mt-16">
                            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-red text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                <div className="hidden md:block absolute left-0 top-8 w-8 h-1 bg-red -translate-x-8"></div>
                                <h3 className="text-xl font-bold mb-4 text-slate-800">Approfondissement et Travail de Fond</h3>
                                <p className="mb-3">Le groupe est formé et commence à se connaître. On attaque le travail de fond avec des jeux plus complexes ou en creusant davantage pour faire ressortir les détails des personnages.</p>
                                <p className="mb-3">On sort de notre zone de confort pour aller plus loin. Pour certains, c'est l'occasion de se découvrir des talents insoupçonnés !</p>
                                <p className="font-semibold">Durée : Environ 3 mois, de janvier à mars.</p>
                            </div>
                        </div>

                        {/* Left Path - Step 3 */}
                        <div className="order-3 md:order-5 relative step-card opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400 mt-8 md:mt-16">
                            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-red text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                <div className="hidden md:block absolute left-0 top-8 w-8 h-1 bg-red -translate-x-8"></div>
                                <h3 className="text-xl font-bold mb-4 text-slate-800">Répétitions Finales et Préparation à la Restitution</h3>
                                <p className="mb-3">Dernière ligne droite, c'est parti : faites chauffer vos voix et concentrez-vous à fond !
                                    Les trois derniers mois, environ, sont consacrés à la restitution des ateliers : un moment où l'on peut inviter sa famille,
                                    ses amis, et parfois même des partenaires ou des personnes intéressées pour accueillir nos spectacles dans leur structure.</p>
                                <p className="mb-3">Dans le cadre des restitutions pour enfants, nous préférons limiter le public à la famille et,
                                    éventuellement, aux amis (en accord avec les parents), afin de ne pas trop stresser nos jeunes comédiens.
                                    Parce que monter sur scène, ça peut faire peur… alors imaginez-vous à leur place !</p>
                                <p className="font-semibold">Calendrier : Restitution du groupe enfants fin mai, adultes début juin.</p>
                            </div>
                        </div>

                        {/* Right Path Title - visible only on mobile */}
                        <div className="text-center mb-8 md:hidden order-4 md:order-2">
                            <h3 className="text-2xl font-bold text-slate-800">Parcours Projets Théâtraux</h3>
                        </div>

                        {/* Right Path - Step 1 */}
                        <div className="order-5 md:order-2 relative step-card opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
                            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-red text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                <div className="hidden md:block absolute left-0 top-8 w-8 h-1 bg-red -translate-x-8"></div>
                                <h3 className="text-xl font-bold mb-4 text-slate-800">Création du Projet et Élaboration du Texte</h3>
                                <p className="mb-3">Nous écoutons le projet et voyons ensemble où et comment nous pouvons intervenir. En parallèle, le travail d'écriture commence afin de composer un texte.</p>
                                <p className="mb-3">Dans le cas où un texte existe déjà, nous le mettons à disposition de notre interlocuteur pour en discuter ensemble et vérifier s'il convient au projet.</p>
                            </div>
                        </div>

                        {/* Right Path - Step 2 */}
                        <div className="order-6 md:order-4 relative step-card opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 mt-8 md:mt-16">
                            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-red text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                <div className="hidden md:block absolute left-0 top-8 w-8 h-1 bg-red -translate-x-8"></div>
                                <h3 className="text-xl font-bold mb-4 text-slate-800">Répétition à l'italienne et Distribution des Rôles</h3>
                                <p className="mb-3">On déroule le texte comme une partition, de manière mécanique et régulière, pour vérifier les enchaînements et repérer d'éventuels défauts.</p>
                                <p className="mb-3">C'est une façon de commencer à mémoriser doucement, tout en découvrant si le personnage nous convient.</p>
                                <p className="mb-3">C'est à ce moment-là que nous faisons la distribution des rôles.</p>
                            </div>
                        </div>

                        {/* Right Path - Step 3 */}
                        <div className="order-7 md:order-6 relative step-card opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500 mt-8 md:mt-16">
                            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-red text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                <div className="hidden md:block absolute left-0 top-8 w-8 h-1 bg-red -translate-x-8"></div>
                                <h3 className="text-xl font-bold mb-4 text-slate-800">Mise en scène</h3>
                                <p className="mb-3">Une fois que le texte est relativement bien intégré et que la lecture devient fluide, on commence la mise en scène.</p>
                                <p className="mb-3">Le but est de continuer à lire son texte au début, pour progressivement s'en détacher, tout en y ajoutant petit à petit les éléments essentiels : déplacements, intonations, intentions, etc.</p>
                                <p className="mb-3">Le spectacle prend alors plus de forme, et tout commence à se mettre en place peu à peu.
                                    Il n'y a pas vraiment de durée précise pour cette étape : tout dépend de la capacité des comédiens à apprendre leur texte et de leur assiduité.</p>
                                <p className="font-semibold">Organisation : Répétitions hebdomadaires le samedi après les ateliers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Final step - convergence */}
                    <div className="mt-24 mb-16 relative">
                        {/* Connector lines from both paths */}
                        <div className="hidden md:block absolute left-1/4 -top-16 w-1 h-16 bg-red transform -translate-x-1/2"></div>
                        <div className="hidden md:block absolute left-3/4 -top-16 w-1 h-16 bg-red transform -translate-x-1/2"></div>
                        <div className="hidden md:block absolute left-1/4 -top-0 w-1/2 h-1 bg-red"></div>
                        <div className="hidden md:block absolute left-1/2 -top-0 w-1 h-16 bg-red"></div>

                        <div className="step-card opacity-0 translate-y-8 transition-all duration-700 ease-out delay-600 max-w-2xl mx-auto">
                            <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 relative z-10">
                                <div className="absolute -top-5 left-1/2 w-10 h-10 bg-red text-white rounded-full flex items-center justify-center font-bold text-xl transform -translate-x-1/2">4</div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Le Grand Final : LE SPECTACLE</h3>
                                <p className="mb-3">C'est bon, tout est prêt et les projecteurs vont s'illuminer.</p>
                                <p className="mb-3">Pour les dernières répétitions, on fait comme si nous y étions : on enchaîne toutes les scènes dans l'ordre. C'est ce qu'on appelle "une générale". La vraie générale se fait sur le lieu du spectacle, avec les derniers réglages.</p>
                                <p className="mb-3">On ajuste aussi les lumières et le son, qui font partie intégrante de l'événement.</p>
                                <p className="font-semibold">Et c'est parti pour le grand final : LE SPECTACLE !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}