'use client'

import Moment from './MomentSection';

export default function FriseSection() {
    return (
        <section className="relative p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">{`Naissance d'un spectacle`}</h2>
            <p className='text-lg md:text-xl md:w-[80%]'>Dans notre association, nous avons un circuit bien défini pour chaque activité.</p>
            <p className='text-lg md:text-xl md:w-[80%]'>
                Les ateliers sont liés à nos spectacles d’improvisation, tandis que nos projets parallèles suivent un parcours
                différent — c’est ce que nous allons vous expliquer un peu plus bas.
                Les étapes générales restent globalement les mêmes, mais dans la mise en œuvre… c’est une autre planche. Vous avez la réf 😄
            </p>
        
            <div className="hidden md:block mt-5 absolute left-[5%] lg:left-[40%] top-56 h-[87%] border-l-2 border-gray-400"></div>

            <div className="container mx-auto space-y-12 relative z-10 mt-12">
                <Moment
                    title="Côté atelier / spectacle d’impro ou formation du Groupe et premiers pas sur scène"
                    description="Nous avons une première étape où l’on accueille tout le monde, petits et grands. On leur présente différents jeux théâtraux ainsi que diverses techniques que nous utilisons.
                    C’est aussi le moment où le groupe se forme, trouve ses marques, et apprend à développer ce qu’on appelle la cohésion de groupe — une base indispensable pour la création des futurs spectacles.
                    On travaille bien sûr la gestion des émotions, de l’espace, le lâcher-prise… Bref, les premiers pas sur scène, quoi.
                    Cette période dure environ 4 mois, de septembre à décembre. Mais nous restons ouverts à l’accueil de nouveaux participants jusqu’en mars, avec une adhésion préférentielle."
                    image="/repetitionitalienne.webp"
                />
                <Moment
                    title="BIS Côtés projet ou création du projet et élaboration du Texte"
                    description="Nous écoutons le projet et voyons ensemble où et comment nous pouvons intervenir. En parallèle, le travail d’écriture commence afin de composer un texte.
                    Dans le cas où un texte existe déjà, nous le mettons à disposition de notre interlocuteur pour en discuter ensemble et vérifier s’il convient au projet."
                    image="/Miseenscene.jpg"
                />
                <Moment
                    title="Côté atelier / spectacle d’impro ou Approfondissement et Travail de Fond"
                    description="Ça y est ! Le groupe est formé et commence à se connaître un peu. On attaque maintenant le travail de fond.
                    Cela passe soit par de nouveaux jeux, un peu plus complexes, soit par la reprise des jeux vus au début, mais avec un niveau de lecture plus poussé. On creuse davantage pour faire ressortir les détails des personnages.
                    On sort de notre zone de confort pour montrer qu’on est capable d’aller plus loin. Ce n’est pas une étape facile, mais elle permet vraiment d’approfondir.
                    Pour certains, c’est même l’occasion de se découvrir des talents insoupçonnés !
                    Bien sûr, l’équipe encadrante est là pour conseiller, et les copains du groupe aussi — parce que le théâtre, c’est une grande famille.
                    On travaille cette phase pendant environ 3 mois, de janvier à mars."
                    image="/repetition_generale.png"
                />
            </div>
        </section>
    );
}