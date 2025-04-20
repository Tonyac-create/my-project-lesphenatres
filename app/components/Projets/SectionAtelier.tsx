import { atelier } from "@/app/utils/atelier";
import Atelier from "./Atelier";

export default function SectionAtelier() {
    return (
        <section className="my-20 p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl mb-5 font-semibold">Quel atelier est fait pour vous ?</h2>
            <p className="text-lg md:text-xl xl:text-2xl mb-5">Ici, tout le monde peut trouver sa place ! Enfants ou adultes, venez découvrir un atelier qui vous ressemble.</p>
            <div className="flex flex-col lg:flex-row justify-center gap-16">
                {atelier.map((atelier) => (
                    <Atelier
                        key={atelier.id}
                        title={atelier.name}
                        description={atelier.description}
                        age={atelier.age}
                        photos={atelier.photos}
                    />
                ))}
            </div>
        </section>
    )
}