export default function PhilosophySection() {
    return (
        <section className="flex flex-col mb-12 p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">Notre philosophie</h2>
            <p className="text-lg md:text-xl">
                {`L’intérêt d’un loisir, est de se faire plaisir, c’est ce à quoi nous inspirons : venir comme nous sommes et surtout tel que nous sommes.
                Les adhérents qui viennent à nos ateliers ont chacun leurs objectifs certains pour `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    s’amuser
                </span>
                {`, d'autres pour `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    progresser
                </span>
                {` mais le point commun est qu’ils viennent tous pour profiter d’un bon moment et s’octroyer une bulle d’oxygène dans leur semaines. 
                    Nous privilégions plutôt la confiance qu’aux règles même si un règlement existe pour donner un cadre à notre association, 
                    nous y restons assez libres à l’intérieur.`}
                <p className="text-lg md:text-xl mt-8">
                    {`Le but étant de laisser profiter les personnes voulant simplement s’amuser, en leur faisant découvrir de nouvelle choses, et en laissant les
                autres progresser à leur rythme. Dans une séance même si nous n'aimons pas le jeu mis en place, on essaie de participer car cela peut inspirer
                les copains, et même les animateurs font des jeux qu’il n’aime pas.`}
                </p>
                {`Pourtant c’est avec cette méthode que nous réussissons à créer des histoires aussi progresser `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    formidable
                </span>
                {` que `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    rocambolesque
                </span>
                {` et surtout nous ne sommes jamais seul sur scène. Nos animateurs sont soit formé à l’animation ou ont assez d’expérience pour prendre en main les ateliers.
                Le théâtre est `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                une grande famille 
                </span>
                {` où chaque personne est là pour l’autre sur scène et en coulisse, c’est dans cette optique là
                que nous préparons nos spectacles où chaque participant à un rôle à jouer et même ceux qui ne font pas le spectacle mais vienne 
                nous regarder pour nous applaudir et nous soutenir. Et pour finir je dirais que l’imagination est le plus 
                grand des atouts de l’homme, dans de mauvaises mains elle peut être destructrice, mais dans de bonnes mains elle permet de faire de grande chose
                et notamment grandir et s'épanouir.`}
            </p>
        </section>
    )
}
