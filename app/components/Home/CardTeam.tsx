import Image from "next/image";

type CardTeamProps = {
    src: string;
    alt: string;
    name: string;
    role: string;
    description: string;
}

export default function CardTeam({ src, alt, name, role, description }: CardTeamProps) {
    return (
        <article className="flex flex-col justify-center items-center w-[350px] p-6">
            <Image
                src={src}
                width={300}
                height={300}
                alt={alt}
                className="w-[250px] h-[250px] object-cover rounded-full mx-auto drop-shadow-[5px_10px_10px_rgba(0,0,0,0.7)]"
            />
            <h4 className="text-red text-3xl my-2.5 font-dancing font-semibold">{name}</h4>
            <p className="text-2xl text-black mb-1">{role}</p>
            <p className="text-xl text-black">{description}</p>
        </article>
    )
}