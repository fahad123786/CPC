import {
    Building2,
    Home,
    Landmark,
    FileSearch,
    Construction,
    FileCheck2,
    ArrowUpRight,
} from "lucide-react";

const planningServices = [
    {
        icon: Building2,
        title: "Master Planning",
        description:
            "Long-term, strategic plans for balanced development.",
    },
    {
        icon: Home,
        title: "Housing Schemes",
        description:
            "Modern, affordable and well-structured communities.",
    },
    {
        icon: Landmark,
        title: "Architectural Design",
        description:
            "Functional, innovative and context-driven designs.",
    },
    {
        icon: FileSearch,
        title: "Project Studies",
        description:
            "Feasibility, market analysis and technical studies.",
    },
    {
        icon: Construction,
        title: "Infrastructure",
        description:
            "Transport, utilities and sustainable infrastructure design.",
    },
    {
        icon: FileCheck2,
        title: "NOCs & Approvals",
        description:
            "Regulatory support and streamlined approval process.",
    },
];

const Planning = () => {
    return (
        <section className="w-full bg-white py-10 md:py-20 lg:py-14">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                <div className="mb-9 max-w-175">

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#6b716c]">
                        Our Services
                    </p>

                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#123f42] sm:text-4xl lg:text-[42px]">
                        Comprehensive Planning Solutions
                    </h2>

                    <p className="mt-3 max-w-162.5 text-[13px] leading-6 text-[#777b77]">
                        We offer a full range of planning and design services to meet the
                        unique needs of each project.
                    </p>

                </div>

                {/* ================= SERVICES GRID ================= */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {planningServices.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="group relative min-h-36.25 rounded-[10px] border border-[#e7e9e6] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(18,63,66,0.08)]"
                            >

                                {/* ================= ICON ================= */}
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f3f0]">
                                    <Icon
                                        size={20}
                                        strokeWidth={2}
                                        className="text-[#123f42] transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* ================= CONTENT ================= */}
                                <h3 className="pr-8 text-[13px] font-bold text-[#123f42]">
                                    {service.title}
                                </h3>

                                <p className="mt-1 max-w-55 text-[11px] leading-5 text-[#7a7e7a]">
                                    {service.description}
                                </p>

                                {/* ================= ARROW ================= */}
                                <button
                                    type="button"
                                    aria-label={`View ${service.title}`}
                                    className="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full border border-[#e2e5e1] text-[#123f42] transition-all duration-300 group-hover:bg-[#123f42] group-hover:text-white"
                                >
                                    <ArrowUpRight
                                        size={12}
                                        strokeWidth={2}
                                    />
                                </button>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default Planning;