const projects = [
    {
        title: "Royal Orchard",
        type: "Master Planning",
        location: "Multan, Pakistan",
        image: "/images/Parliament1.jpg",
        size: "md:col-span-7",
    },
    {
        title: "Bahria Town Icon Valley",
        type: "Commercial Complex",
        location: "Karachi, Pakistan",
        image: "/images/gate_10 - Photo.jpg",
        size: "md:col-span-5",
    },
    {
        title: "DHA City Phase 2",
        type: "Housing Scheme",
        location: "Lahore, Pakistan",
        image: "/images/top1.jpg",
        size: "md:col-span-5",
    },
    {
        title: "Metro Bus Corridor",
        type: "Infrastructure",
        location: "Islamabad, Pakistan",
        image: "/images/top4.jpg",
        size: "md:col-span-7",
    },
];

export default function ProjectShowcase() {
    return (
        <section className="bg-[#f8f8f3] px-6 py-10 lg:px-16 lg:py-18">
            <div className="mx-auto max-w-[1400px]">

                {/* ================= HEADER ================= */}
                <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
                            Portfolio
                        </p>

                        <h2 className="font-serif text-4xl leading-tight tracking-[-1px] text-[#123f42] md:text-5xl">
                            A few places we have shaped.
                        </h2>
                    </div>

                    <p className="hidden text-sm text-[#577071] md:block">
                        04 / 12 projects
                    </p>
                </div>

                {/* ================= PROJECT GRID ================= */}
                <div className="grid gap-5 md:grid-cols-12">

                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={`group ${project.size}`}
                        >
                            <div className="relative aspect-[1.35] overflow-hidden rounded-[1.5rem] bg-[#dbe4df]">

                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Bottom Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#073f42]/90 via-[#073f42]/35 to-transparent" />

                                {/* Project Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">

                                    <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#d8bf72]">
                                        {project.type}
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl leading-tight text-white md:text-3xl">
                                        {project.title}
                                    </h3>

                                    <p className="mt-1 text-sm text-white/75">
                                        {project.location}
                                    </p>
                                </div>

                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}

