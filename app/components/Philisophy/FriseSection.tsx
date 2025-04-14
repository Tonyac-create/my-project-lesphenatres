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

            <div className="hidden md:block mt-5 absolute left-[5%] lg:left-[60%] top-56 h-[87%] border-l-2 border-gray-400"></div>

            <div className="container mx-auto space-y-12 relative z-10 mt-12">
                <Moment
                    title="1. Côté atelier / spectacle d’impro ou formation du Groupe et premiers pas sur scène"
                    description="Nous avons une première étape où l’on accueille tout le monde, petits et grands. On leur présente différents jeux théâtraux ainsi que diverses techniques que nous utilisons.
                    C’est aussi le moment où le groupe se forme, trouve ses marques, et apprend à développer ce qu’on appelle la cohésion de groupe — une base indispensable pour la création des futurs spectacles.
                    On travaille bien sûr la gestion des émotions, de l’espace, le lâcher-prise… Bref, les premiers pas sur scène, quoi.
                    Cette période dure environ 4 mois, de septembre à décembre. Mais nous restons ouverts à l’accueil de nouveaux participants jusqu’en mars, avec une adhésion préférentielle."
                    image="/repetitionitalienne.webp"
                />
                <Moment
                    title="1 Bis. Côtés projet ou création du projet et élaboration du Texte"
                    description="Nous écoutons le projet et voyons ensemble où et comment nous pouvons intervenir. En parallèle, le travail d’écriture commence afin de composer un texte.
                    Dans le cas où un texte existe déjà, nous le mettons à disposition de notre interlocuteur pour en discuter ensemble et vérifier s’il convient au projet."
                    image="/Miseenscene.jpg"
                />
                <Moment
                    title="2. Côté atelier / spectacle d’impro ou Approfondissement et Travail de Fond"
                    description="Ça y est ! Le groupe est formé et commence à se connaître un peu. On attaque maintenant le travail de fond.
                    Cela passe soit par de nouveaux jeux, un peu plus complexes, soit par la reprise des jeux vus au début, mais avec un niveau de lecture plus poussé. On creuse davantage pour faire ressortir les détails des personnages.
                    On sort de notre zone de confort pour montrer qu’on est capable d’aller plus loin. Ce n’est pas une étape facile, mais elle permet vraiment d’approfondir.
                    Pour certains, c’est même l’occasion de se découvrir des talents insoupçonnés !
                    Bien sûr, l’équipe encadrante est là pour conseiller, et les copains du groupe aussi — parce que le théâtre, c’est une grande famille.
                    On travaille cette phase pendant environ 3 mois, de janvier à mars."
                    image="/repetition_generale.png"
                />
                <Moment
                    title="2 Bis. Répétition à l’italienne ou mémorisation et distribution des rôles"
                    description="On déroule le texte comme une partition, de manière mécanique et régulière, pour vérifier les enchaînements et repérer d’éventuels défauts.
                    C’est une façon de commencer à mémoriser doucement, sans pression, tout en découvrant si le personnage nous convient.
                    Et si ce n’est pas le cas, c’est aussi l’occasion de repérer un autre rôle qui pourrait mieux nous correspondre, afin d’échanger si besoin.
                    C’est à ce moment-là que nous faisons la distribution des rôles."
                    image="/repetition_generale.png"
                />
                <Moment
                    title="3. Côté atelier / spectacle d’impro ou répétitions finales et préparation à la restitution"
                    description="Dernière ligne droite, c’est parti : faites chauffer vos voix et concentrez-vous à fond !
                        Les trois derniers mois, environ, sont consacrés à la restitution des ateliers : un moment où l’on peut inviter sa famille, ses amis, et parfois même des partenaires ou des personnes intéressées pour accueillir nos spectacles dans leur structure.
                        Dans le cadre des restitutions pour enfants, nous préférons limiter le public à la famille et, éventuellement, aux amis (en accord avec les parents), afin de ne pas trop stresser nos jeunes comédiens.
                        Parce que monter sur scène, ça peut faire peur… alors imaginez-vous à leur place !
                        Nous construisons la restitution avec les personnes volontaires : l’une des clés de la réussite de ce spectacle, c’est l’implication de chacun.
                        On travaille les derniers détails, on approfondit les éléments demandés par les participants — se sont vraiment nos adhérents qui créent leur spectacle de A à Z, notamment pour le groupe des adultes.
                        Pour les enfants, nous proposons une trame plus large, afin d’éviter que cela parte dans tous les sens, tout en gardant notre cadre ludique et structuré.
                        La restitution du groupe enfants a lieu fin mai, tandis que celles des adultes se tiennent début juin."
                    image="/repetition_generale.png"
                />
                <Moment
                    title="3 Bis. Mise en scène"
                    description="Une fois que le texte est relativement bien intégré et que la lecture devient fluide, on commence la mise en scène.
                    Le but est de continuer à lire son texte au début, pour progressivement s’en détacher, tout en y ajoutant petit à petit les éléments essentiels : déplacements, intonations, intentions, etc.
                    Le spectacle prend alors plus de forme, et tout commence à se mettre en place peu à peu.
                    Il n’y a pas vraiment de durée précise pour cette étape : tout dépend de la capacité des comédiens à apprendre leur texte et de leur assiduité.
                    Nous essayons de répéter une fois par semaine, le samedi après les ateliers.
                    Mais si le besoin se fait sentir, on essaie aussi de trouver d’autres petits créneaux pour retravailler certaines scènes en particulier."
                    image="/repetition_generale.png"
                />
                <Moment
                    title="4. Le grand final : Le Spectacle"
                    description="C’est bon, tout est prêt et les projecteurs vont s’illuminer.
                    Pour les dernières répétitions, on fait comme si nous y étions : on enchaîne toutes les scènes dans l’ordre. On appelle ça “une générale”. En réalité, la vraie générale se fait lorsque nous prenons place sur le lieu du spectacle, car c’est à ce moment-là que nous effectuons les derniers réglages en fonction de la taille du plateau (la scène, quoi).
                    On ajuste aussi les lumières et le son, qui font partie intégrante de l’événement.
                    Et c’est parti pour le grand final : LE SPECTACLE !"
                    image="/repetition_generale.png"
                />
            </div>
        </section>
    );
}