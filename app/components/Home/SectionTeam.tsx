import { team } from "../../utils/team";
import Button from "../Button";
import CardTeam from "./CardTeam";

export default function SectionTeam() {
    return (
        <section className="flex flex-col items-center gap-6 p-8 md:px-28 md:py-11 tracking-wide">
            <h3 className="font-dancing text-red text-3xl md:text-5xl mb-3.5 pl-6 font-semibold flex mr-auto">{`Les membres du comité d'administration`}</h3>
            <div className="flex flex-wrap justify-center gap-8">
                {team.map((member, index) => (
                    <CardTeam key={index} src={member.src} alt={member.alt} name={member.name} role={member.role} description={member.description} />
                ))}
            </div>
        </section>
    )
}