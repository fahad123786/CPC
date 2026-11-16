import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import projects from "./constructionProject.js";

export default function ConstructionProject() {
    const { projectSlug } = useParams();
    const project =
        projects.find((item) => item.slug === projectSlug) ??
        (projectSlug === "construction" || projectSlug === "construction"
            ? projects[0]
            : undefined);

    if (!project) {
        return <Navigate to="/projects/construction" replace />;
    }

    return (
        <div className="overflow-hidden bg-[#f8f8f3]">
            <section className="relative isolate overflow-hidden bg-[#073f42] px-6 pb-14 pt-10 text-white lg:px-16 lg:pb-20">
                <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#073f42]/95 via-[#123f42]/90 to-[#123f42]/70" />
                <div className="relative mx-auto max-w-[1400px]">
                    <Link
                        to="/projects/construction"
                        className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#d8bf72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bf72]"
                    >
                        <ArrowLeft size={16} />
                        Back to Construction
                    </Link>

                    <div className="mt-16 max-w-4xl lg:mt-24">
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#d8bf72]" />
                            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d8bf72]">
                                {project.type}
                            </p>
                        </div>
                        <h1 className="font-serif text-5xl leading-[0.98] tracking-[-2px] sm:text-6xl md:text-7xl">
                            {project.title}
                        </h1>
                        {project.location && (
                            <p className="mt-7 inline-flex items-center gap-2 text-sm text-white/75">
                                <MapPin size={16} className="text-[#d8bf72]" />
                                {project.location}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 lg:px-16 lg:py-20">
                <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-[1.2] w-full rounded-[1.5rem] object-cover"
                    />
                    <div className="py-2">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
                            Project overview
                        </p>
                        <h2 className="font-serif text-3xl leading-tight tracking-[-1px] text-[#123f42] md:text-4xl">
                            A considered plan for a better place.
                        </h2>
                        <p className="mt-6 text-base leading-8 text-[#577071]">
                            {project.description}
                        </p>
                        <Link
                            to="/projects/construction"
                            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#123f42]/20 px-6 py-3.5 text-sm font-medium text-[#123f42] transition-colors hover:border-[#123f42] hover:bg-[#123f42] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79538]"
                        >
                            More Construction projects
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#123f42] px-6 py-14 text-white lg:px-16 lg:py-20">
                <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#d8bf72]">
                            Have a place in mind?
                        </p>
                        <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                            Let&apos;s plan what comes next.
                        </h2>
                    </div>
                    <Link
                        to="/contact"
                        className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#d8bf72] px-6 py-3.5 text-sm font-semibold text-[#123f42] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Start a conversation
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </section>
        </div>
    );
}
