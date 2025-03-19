import Image from "next/image";

export default function HeroSection() {
    return (
        <section className=" flex flex-col items-center pt-[8.125rem] mt-[5.875rem] px-5 h-screen bg-[url(/Rideau_theatre.webp)] bg-cover bg-center text-white">
            <Image
                src="/logo-phenatres.webp"
                width={150}
                height={150}
                alt="Rideau de théâtre"
            />
            <h2 className="font-dancing text-[2.25rem] text-center mt-6">{`Le théâtre prend vie sous vos yeux !`}</h2>
            <p className="text-center mt-4">{`Un espace où chacun progresse à son rythme, en s’amusant et sans prise de tête.
                 Ici, on vient comme on est, on crée, on improvise et surtout, on partage !`}</p>
        </section>
    )
}