import {
    ArrowUpRight,
    Building2,
    Construction,
    FileCheck2,
    FileSearch,
    Home,
    Map,
} from "lucide-react";

const services = [
    {
        number: "01",
        title: "Master Planning",
        text: "Long-term, strategic plans for balanced and sustainable development.",
        image: "/images/01.jpg",
        icon: Map,
    },
    {
        number: "02",
        title: "Housing Schemes",
        text: "Modern, affordable and well-structured communities for better living.",
        image: "/images/03.jpg",
        icon: Home,
    },
    {
        number: "03",
        title: "Architectural Design",
        text: "Functional, innovative and context-driven designs for every scale.",
        image: "/images/A15.jpg",
        icon: Building2,
    },
    {
        number: "04",
        title: "Project Studies",
        text: "Feasibility, market analysis and technical studies for confident decisions.",
        image: "/images/top1.jpg",
        icon: FileSearch,
    },
    {
        number: "05",
        title: "Infrastructure",
        text: "Transport, utilities and resilient infrastructure designed to connect.",
        image: "/images/top4.jpg",
        icon: Construction,
    },
    {
        number: "06",
        title: "NOCs & Approvals",
        text: "Regulatory support and a streamlined path through the approval process.",
        image: "/images/gate_10 - Photo.jpg",
        icon: FileCheck2,
    },
];

export default function ServicesGrid() {
    return (
        <section className="bg-[#f8f8f3] px-6 py-20 lg:px-16 lg:py-28">
            <div className="mx-auto max-w-[1400px]">

                {/* Header */}
                <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
                            Our capabilities
                        </p>

                        <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-1px] text-[#123f42] md:text-5xl lg:text-6xl">
                            A considered process.
                            <br />
                            A confident outcome.
                        </h2>
                    </div>

                    <div className="max-w-xs border-l border-[#123f42]/20 pl-5">
                        <p className="text-sm leading-6 text-[#577071]">
                            Six connected disciplines working together to shape better,
                            more sustainable places.
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map(
                        ({ number, title, text, image, icon: Icon }, index) => (
                            <article
                                key={title}
                                className="group relative min-h-[390px] overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#123f42] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#b79538]/60 hover:shadow-[0_20px_50px_rgba(18,63,66,0.10)] md:p-8"
                            >
                                {/* Background Image */}
                                <img
                                    src={image}
                                    alt={`${title} project`}
                                    className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-35"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#073f42]/80 via-[#073f42]/45 to-[#073f42]/20" />

                                {/* Top Row */}
                                <div className="relative flex items-start justify-between">
                                    <span className="font-serif text-2xl text-[#d8bf72]">
                                        {number}
                                    </span>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-all duration-500 group-hover:border-[#b79538]/50 group-hover:bg-[#123f42]">
                                        <Icon
                                            size={21}
                                            strokeWidth={1.4}
                                            className="text-white transition-colors duration-500 group-hover:text-[#d8bf72]"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative mt-24">
                                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2.5px] text-[#d8bf72]">
                                        Service {index + 1}
                                    </p>

                                    <h3 className="font-serif text-2xl leading-tight text-white md:text-[28px]">
                                        {title}
                                    </h3>

                                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                                        {text}
                                    </p>
                                </div>

                                {/* Bottom */}
                                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/20 pt-5 md:bottom-8 md:left-8 md:right-8">
                                    <span className="text-xs font-medium uppercase tracking-[2px] text-white/60 transition-colors group-hover:text-[#d8bf72]">
                                        Explore service
                                    </span>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123f42] text-white transition-all duration-500 group-hover:bg-[#b79538] group-hover:text-[#123f42]">
                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.5}
                                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </div>
                                </div>
                            </article>
                        )
                    )}
                </div>

            </div>
        </section>
    );
}
