import SectionAtelier from "../components/Projets/SectionAtelier";
import SectionProjets from "../components/Projets/SectionProjets";
import TheatreParcours from "../components/TheatreParcours";

export default function Projets() {
    return (
        <main>
            <SectionAtelier />
            <TheatreParcours />
            <SectionProjets />
        </main>
    );
}