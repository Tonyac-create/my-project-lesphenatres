import { team } from "../../utils/team";
import CardTeam from "./CardTeam";

export default function SectionTeam() {
    return (
        <section className="flex flex-col items-center gap-6 pt-8 px-8 md:px-28 md:pb-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl sm:text-4xl xl:text-5xl mb-5 lg:mb-7 pl-6 font-semibold flex mr-auto">{`Les membres du comité d'administration`}</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {team.map((member, index) => (
                    <CardTeam key={index} src={member.src} alt={member.alt} name={member.name} role={member.role} description={member.description} />
                ))}
            </div>
        </section>
    )
}