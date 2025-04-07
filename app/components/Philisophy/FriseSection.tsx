'use client'

import Moment from './MomentSection';

export default function FriseSection() {
    return (
        <section className="relative p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">{`Naissance d'un spectacle`}</h2>
            
            {/* Timeline line - hidden on mobile, visible from md breakpoint */}
            <div className="hidden md:block absolute left-[5%] lg:left-1/4 top-36 h-[87%] border-l-2 border-gray-400"></div>

            <div className="container mx-auto space-y-12 relative z-10 mt-12">
                <Moment 
                    title="Répétition à l'italienne" 
                    description="On déroule le texte comme une partition, de manière mécanique et régulière, pour vérifier les enchaînements et les éventuels trous de mémoire." 
                    image="/repetitionitalienne.webp" 
                />
                <Moment 
                    title="Mise en scène" 
                    description="Une fois les mots bien en place, les acteurs peuvent enfin s’en libérer pour jouer, ressentir et habiter pleinement leurs personnages." 
                    image="/Miseenscene.jpg" 
                />
                <Moment 
                    title="Construction du spectacle"
                    description="Un spectacle se construit comme un paysage : d’abord les lignes essentielles, les repères fixes, puis les détails viennent peupler l’espace. On travaille la matière du jeu, les rythmes, les silences, les présences. Tout s’affine, se tisse, jusqu’à trouver l’équilibre entre ce qui est dit, montré et ressenti." 
                    image="/theatre_scene.jpg" 
                />
                <Moment 
                    title="Le fil rouge"
                    description="Le fil rouge, c’est le moment où tout se relie : les scènes, les corps, les voix, les silences. On déroule le spectacle du début à la fin, sans s’arrêter, pour en sentir la dynamique globale et tisser ensemble la continuité du récit." 
                    image="/repetition_generale.png" 
                />
            </div>
        </section>
    );
}