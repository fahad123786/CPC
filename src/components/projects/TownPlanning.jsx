import { ArrowDownRight, ArrowLeft, ArrowRight, Compass, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "./townPlanningProjects";

export default function TownPlanning() {
    return (
        <div className="overflow-hidden bg-[#f8f8f3]">
            <section className="relative isolate overflow-hidden bg-[#073f42] px-6 pb-14 pt-10 text-white lg:px-16 lg:pb-20">
                <img
                    src="/images/03.jpg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#073f42]/95 via-[#123f42]/90 to-[#123f42]/70" />
                <div className="tp-orbit pointer-events-none absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full border border-[#d8bf72]/20" />
                <div className="tp-orbit pointer-events-none absolute -right-12 -top-28 h-[27rem] w-[27rem] rounded-full border border-[#d8bf72]/15" />
                <div className="tp-light-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

                <div className="relative mx-auto max-w-[1400px]">
                    <Link
                        to="/projects"
                        className="tp-rise inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#d8bf72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bf72]"
                    >
                        <ArrowLeft size={16} />
                        Back to all projects
                    </Link>

                    <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
                        <div className="tp-rise" style={{ animationDelay: "120ms" }}>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#d8bf72]" />
                                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d8bf72]">
                                    Planning portfolio
                                </p>
                            </div>
                            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-2px] sm:text-6xl md:text-7xl lg:text-[86px]">
                                Town planning,
                                <span className="block text-[#d8bf72]">made tangible.</span>
                            </h1>
                        </div>

                        <div className="tp-rise lg:pb-2" style={{ animationDelay: "260ms" }}>
                            <div className="mb-7 h-px w-16 bg-[#d8bf72]" />
                            <p className="max-w-xl text-base leading-7 text-[#d2ddda] md:text-lg md:leading-8">
                                Explore masterplans, community layouts, and public spaces
                                shaped around how people live, move, and connect.
                            </p>
                            <a
                                href="#planning-projects"
                                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#d8bf72]/50 px-6 py-3.5 text-sm font-medium text-[#d8bf72] transition-all duration-300 hover:border-[#d8bf72] hover:bg-[#d8bf72] hover:text-[#123f42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bf72]"
                            >
                                Explore the work
                                <ArrowDownRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[10px] uppercase tracking-[2.5px] text-[#c4d1ce]/70">
                            Master Planning · Community Design · Public Realm
                        </p>
                        <div className="flex items-center gap-3 text-[#d8bf72]/80">
                            <Compass size={18} strokeWidth={1.2} />
                            <span className="text-[10px] uppercase tracking-[2px]">
                                Built for better places
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="planning-projects"
                className="scroll-mt-24 px-6 py-16 lg:px-16 lg:py-24"
            >
                <div className="mx-auto max-w-[1400px]">
                    <div className="tp-rise mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
                                Selected work
                            </p>
                            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-1px] text-[#123f42] md:text-5xl">
                                Plans for places with a future.
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-6 text-[#577071]">
                            From regional land-use strategies to the details that make a
                            neighborhood work as a whole.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-12">
                        {projects.map((project, index) => {
                            const featured = index === 0;

                            return (
                                <Link
                                    to={`/projects/town-planning/${project.slug}`}
                                    key={project.title}
                                    className={`tp-project-card group relative block ${project.size} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79538]`}
                                    style={{ animationDelay: `${180 + index * 110}ms` }}
                                    aria-label={`Read about ${project.title}`}
                                >
                                    <div
                                        className={`relative isolate flex items-center overflow-hidden rounded-[1.5rem] bg-white ${featured
                                                ? "min-h-[560px] sm:min-h-[500px]"
                                                : "min-h-[420px] sm:min-h-[400px]"
                                            }`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading={index > 1 ? "lazy" : "eager"}
                                            className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
                                        />

                                        {/* Same white fade as MASTER PLAN; slightly stronger on small cards so text stays readable */}
                                        <div
                                            className={`absolute inset-0 -z-10 bg-gradient-to-b from-white to-white/25 ${featured
                                                    ? "md:bg-gradient-to-r md:from-white md:via-white/75 md:via-60% md:to-white/25"
                                                    : "via-white/70 md:bg-gradient-to-r md:from-white md:via-white/63 md:via-60% md:to-white/10"
                                                }`}
                                        />

                                        <div
                                            className={`max-w-2xl ${featured ? "p-7 sm:p-10 lg:p-14" : "p-6 sm:p-8 lg:p-10"
                                                }`}
                                        >
                                            <p className="inline-flex rounded-sm bg-[#123f42] px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white">
                                                {project.type ?? "Town planning project"}
                                            </p>

                                            <h3
                                                className={`mt-5 font-sans font-bold uppercase leading-[1.05] text-[#123f42] ${featured
                                                        ? "text-4xl tracking-[-1.5px] sm:text-5xl md:text-6xl"
                                                        : "text-3xl tracking-[-1px] sm:text-4xl"
                                                    }`}
                                            >
                                                {project.displayTitle ?? project.title}
                                            </h3>

                                            {(project.displaySubtitle || !featured) && (
                                                <p
                                                    className={`mt-2 font-medium uppercase leading-tight text-[#183f42] ${featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                                                        }`}
                                                >
                                                    {project.displaySubtitle ?? project.location}
                                                </p>
                                            )}

                                            <div className="mt-5 h-px w-full max-w-md bg-[#123f42]/35" />

                                           

                                            {project.location && (
                                                <p className="mt-5 inline-flex items-center gap-2 text-sm text-[#123f42]">
                                                    <MapPin size={17} className="shrink-0" />
                                                    {project.location}
                                                </p>
                                            )}

                                            <span className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-[#123f42]">
                                                View project
                                                <ArrowRight
                                                    size={featured ? 30 : 22}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
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
