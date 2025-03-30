export default function PhilosophySection() {
    return (
        <section className="flex flex-col my-16 p-8 md:px-28 md:py-11 tracking-wide">
            <h2 className="font-dancing text-red text-3xl md:text-5xl mb-5 font-semibold">Notre philosophie</h2>
            <p className="text-lg md:text-2xl">
                <span className="bg-gradient-to-r from-red to-orange-500 inline-block text-transparent bg-clip-text font-semibold">
                    Lorem ipsum dolor
                </span>
                {` sit amet consectetur, adipisicing elit. Odit exercitationem optio facere illum commodi, in nulla,
                 sapiente dignissimos reiciendis vel maiores, iusto animi cumque? Cupiditate reiciendis quo similique corporis est. 
                 Maxime maiores expedita facere nobis molestiae corporis fugiat officia debitis ut ea! Sequi dolorem rerum maiores
                  veritatis dolore quia debitis quidem placeat repudiandae provident, voluptates veniam, esse numquam aut eos.
                Corporis praesentium dolores adipisci perspiciatis quis totam! `}
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text font-semibold">
                    A fuga, nam, saepe 
                </span>
                {`dicta eligendi porro ea ipsam id facilis nulla nesciunt eius. Magnam dignissimos doloremque molestiae, deserunt soluta dolores eum magni?
                 Unde, facere. Vel sed itaque dicta repellendus beatae!`}
            </p>
        </section>
    )
}