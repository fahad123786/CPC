import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#e8eee9] px-6 pb-20 pt-20 lg:px-16 lg:pb-28">
      <div className="mx-auto grid max-w-[1400px] items-end gap-12 lg:grid-cols-[1.05fr_.95fr]">

        {/* Left Content */}
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
            What we do
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-[.96] tracking-[-2px] text-[#123f42] md:text-7xl">
            Plans that make room for people.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-[#315355]">
            CPC provides integrated planning, architectural and infrastructure
            solutions that create livable, sustainable and resilient communities.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#073f42] px-6 py-3.5 text-sm text-white transition hover:bg-[#0b5558]"
          >
            Start a conversation
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right Card */}
        <div className="relative min-h-[250px] overflow-hidden rounded-[2rem] bg-[#123f42] p-8 text-white lg:min-h-[340px]">
          
          <Compass
            className="absolute -right-8 -top-8 h-56 w-56 text-[#b79538]/25"
            strokeWidth={1}
          />

          <div className="relative flex h-full flex-col justify-end">
            <span className="font-serif text-6xl text-[#d8bf72]">
              06
            </span>

            <p className="mt-3 max-w-xs text-lg leading-6">
              Services, one shared vision for better places.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}