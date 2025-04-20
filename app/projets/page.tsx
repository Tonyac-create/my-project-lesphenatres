import HeroSectionProjets from "../components/Projets/HeroSectionProjets";
import SectionAtelier from "../components/Projets/SectionAtelier";
import SectionProjets from "../components/Projets/SectionProjets";
import TheatreParcours from "../components/Projets/TheatreParcours";

export default function Projets() {
    return (
        <main>
            <HeroSectionProjets />
            <SectionAtelier />
            <TheatreParcours />
            <SectionProjets />
        </main>
    );
}