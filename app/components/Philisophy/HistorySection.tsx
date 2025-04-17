export default function HistorySection() {
    return (
        <section className="flex flex-col mt-16 p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">Notre histoire</h2>
            <p className="text-lg md:text-xl">
                {`Notre association a été créée en 2020, au tristement célèbre moment de la pandémie du covid 19, elle a été créée
                 par un groupe de personnes voulant juste faire du théâtre et en partageant cette passion au plus grand nombre,
                  tout en restant contrairement à une expérience précédente. Le nom de l'association “Les phénâtres de l'Artois”
                   est un mélange des 2 mots. `}          </p>
            <p className="text-lg md:text-xl">
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    Phénix
                </span>
                {` tout d’abord pour le côté résurrection de quelque chose, un nouveau cycle, une nouvelle aventure. `}
            </p>
            <p className="text-lg md:text-xl">
                {`Ensuite, `}
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text font-semibold">
                    théâtre
                </span>
                {` qui est le cœur même de l’association sous différente forme écrite ou improvisée, ce qui donne en conjuguant les deux : `}
                <span className="mb-8 bg-gradient-to-r from-red to-purple-600 inline-block text-transparent bg-clip-text font-semibold">
                    Phénâtres
                </span>
            </p>
            <p>
                {`Elle est basée à l'Office Culturel d’Arras dans le Pas de Calais, qui est pour nous un soutien plus qu’essentiel au même titre que 
                 la ville qui prête les locaux à cette structure ce qui nous donne accès à un panel de services immense. Notre association a pour but 
                 de faire découvrir le `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    théâtre d’improvisation
                </span>
                {` et laisser libre court à `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    l'imagination
                </span>
                {` . Selon les projets et les groupes, nous faisons 
                 aussi appel au `}
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    théâtre de texte
                </span>
                {` par le biais de divers exercices, elle est une grande famille qui réunit des personnes de différents 
                 âges et de différents horizons. Aujourd’hui, l’association, c’est plusieurs ateliers pour différents groupes permettant sur la base
                  du volontariat, de monter sur diverses scène, mais aussi un projet majeur défendu sur une période.`}</p>

        </section>
    )
}