import Moment from "./MomentSection";

export default function FriseSection() {
    return (
        <section className="relative p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">Un engagement concret</h2>
            <div className="absolute left-1/4 top-36 h-full border-l-2 border-gray-400"></div>

            <div className="container mx-auto space-y-12 relative z-10 mt-12">
                <Moment title="Répétition Initiale" description="Première répétition..." image="/representation-phenatres.webp" />
                <Moment title="Premier Spectacle" description="Un grand moment..." image="/nid-hibou.webp" />
                <Moment title="Les Coulisses" description="Derrière chaque scène..." image="/ateliers-les-phenatres.webp" />
            </div>
        </section>

    )
}