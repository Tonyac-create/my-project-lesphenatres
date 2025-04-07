import { spectaclesComplete } from "@/app/utils/spectacle";
import CardSpectacle from "./CardSpectacle";

export default function SectionProjets() {
    return (
        <section className="my-20 p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-8 font-semibold">Nos spectacles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:divide-x-2 divide-gray-500">
                {spectaclesComplete.map((spectacle) => (
                    <CardSpectacle
                        key={spectacle.id}
                        src={spectacle.image2}
                        title={spectacle.title}
                        description={spectacle.description}
                        description2={spectacle.description2}
                        description3={spectacle.description3}
                    />
                ))}
            </div>
        </section>
    )
}