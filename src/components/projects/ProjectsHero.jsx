import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsHero() {
    return (
        <section className="relative overflow-hidden bg-[#123f42] px-6 pb-20 pt-40 text-white lg:px-16 lg:pb-28">
            <img
                src="/images/03.jpg"
                alt="CPC project masterplan"
                className="absolute inset-0 h-full w-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#073f42]/95 via-[#123f42]/85 to-[#123f42]/55" />
            <div className="absolute inset-0 bg-[#073f42]/20" />

            {/* Decorative Elements */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d8bf72]/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#d8bf72]/10" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d8bf72]/30 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1400px]">

                {/* Small Top Label */}
                <div className="mb-14 flex items-center gap-4">
                    <span className="h-px w-12 bg-[#d8bf72]" />
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d8bf72]">
                        Selected Work
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">

                    {/* Heading */}
                    <div className="relative">
                        <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-2px] sm:text-6xl md:text-7xl lg:text-[76px]">
                            Shaping places that move communities forward.
                        </h1>

                        {/* Decorative Number */}
                        <span className="pointer-events-none absolute -bottom-12 right-0 hidden font-serif text-8xl text-white/[0.035] lg:block">
                            06
                        </span>
                    </div>

                    {/* Description + CTA */}
                    <div className="relative lg:pb-2">
                        <div className="mb-8 h-px w-16 bg-[#d8bf72]" />

                        <p className="max-w-md text-base leading-7 text-[#c4d1ce]">
                            Explore CPC projects across master planning, commercial
                            development, housing schemes and infrastructure in Pakistan.
                        </p>

                        <Link
                            to="/contact"
                            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#d8bf72]/50 px-6 py-3.5 text-sm font-medium text-[#d8bf72] transition-all duration-300 hover:border-[#d8bf72] hover:bg-[#d8bf72] hover:text-[#123f42]"
                        >
                            Discuss your project

                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>

                {/* Bottom Information */}
                <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
                    <p className="text-[10px] uppercase tracking-[2.5px] text-[#c4d1ce]/60">
                        Planning · Architecture · Infrastructure
                    </p>

                    <div className="hidden items-center gap-3 text-[#d8bf72]/60 sm:flex">
                        <Compass size={18} strokeWidth={1.2} />
                        <span className="text-[10px] uppercase tracking-[2px]">
                            Built for better places
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}