import { atelier } from "@/app/utils/atelier";
// import CardAtelier from "./CardAtelier";
import Atelier from "./Atelier";

export default function SectionAtelier() {
    return (
        <section className="my-20 p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-8 font-semibold">Quel atelier est fait pour vous ?</h2>
            <p className="text-lg md:text-xl mb-5">Ici, tout le monde peut trouver sa place ! Enfants ou adultes, venez découvrir un atelier qui vous ressemble.</p>
            <div className="flex flex-col justify-center gap-16">
                {atelier.map((atelier) => (
                    <Atelier
                        key={atelier.id}
                        title={atelier.name}
                        description={atelier.description}
                        age={atelier.age}
                        photos={atelier.photos}
                        className={atelier.className}
                    />
                ))}
            </div>
        </section>
    )
}