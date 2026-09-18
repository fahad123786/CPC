import {
  ArrowRight,
  Map,
  House,
  Building2,
  FileSearch,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const HeroHome = () => {
  const heroImage = "/images/gate_10 - Photo.jpg";

  const services = [
    {
      title: "Master Planning",
      description: "Strategic plans for sustainable growth.",
      icon: Map,
    },
    {
      title: "Housing Schemes",
      description: "Quality housing for modern living.",
      icon: House,
    },
    {
      title: "Architectural Design",
      description: "Functional, aesthetic and context-driven design.",
      icon: Building2,
    },
    {
      title: "Project Studies",
      description: "Feasibility assessments and technical advisory.",
      icon: FileSearch,
    },
    {
      title: "Infrastructure",
      description: "Integrated systems for future-ready communities.",
      icon: Landmark,
    },
    {
      title: "NOCs & Approvals",
      description: "Regulatory support and timely approvals.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#F7F7F2] pt-2">
      {/* ================= HERO ================= */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="relative min-h-[560px] overflow-hidden rounded-[2px]">

          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Sustainable Urban Planning"
              className="h-full w-full object-cover"
            />

            {/* Left White Overlay - Ends Around Half */}
            <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-[#F7F7F2] via-[#F7F7F2]/95 via-[65%] to-transparent" />

            {/* Bottom Subtle Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F7F7F2]/40 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-[560px] items-center">
            <div className="w-full max-w-[590px] py-16 lg:py-20">

              {/* Small Heading */}
              <div className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[2px] text-[#397275] sm:text-[10px]">
                <span>Urban Planning</span>
                <span>/</span>
                <span>Architecture</span>
                <span>/</span>
                <span>Infrastructure</span>
              </div>

              {/* Main Heading */}
              <h1 className="max-w-[570px] font-serif text-[43px] leading-[0.98] tracking-[-2px] text-[#123F42] sm:text-[52px] lg:text-[60px]">
                Shaping Sustainable
                <br />
                Communities for
                <br />
                a Better Tomorrow
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[440px] text-[13px] leading-6 text-[#4E696A] sm:text-[14px]">
                CPC provides integrated planning, architectural and
                infrastructure solutions that create livable, sustainable
                and resilient communities.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group flex items-center gap-4 rounded-full bg-[#073F42] px-5 py-3 text-[11px] font-medium text-white transition duration-300 hover:bg-[#0B5558]"
                >
                  <span>Start a Consultation</span>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>

                <a
                  href="#projects"
                  className="flex items-center gap-3 rounded-full border border-[#073F42]/30 bg-white/40 px-5 py-3 text-[11px] font-medium text-[#073F42] backdrop-blur-sm transition duration-300 hover:bg-white"
                >
                  Explore Our Projects
                  <ArrowRight size={13} />
                </a>
              </div>

              {/* Stats */}
              <div className="mt-9 flex flex-wrap items-center gap-0">

                {/* Stat 01 */}
                <div className="flex items-center gap-2.5 pr-7">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#397275]/30">
                    <Map size={14} className="text-[#397275]" />
                  </div>

                  <div>
                    <p className="font-serif text-[21px] leading-none text-[#123F42]">
                      15+
                    </p>

                    <p className="mt-1 text-[8px] text-[#6B7E7E]">
                      Years of Experience
                    </p>
                  </div>
                </div>

                <div className="h-9 w-px bg-[#123F42]/15" />

                {/* Stat 02 */}
                <div className="flex items-center gap-2.5 px-7">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#397275]/30">
                    <Building2 size={14} className="text-[#397275]" />
                  </div>

                  <div>
                    <p className="font-serif text-[21px] leading-none text-[#123F42]">
                      40+
                    </p>

                    <p className="mt-1 text-[8px] text-[#6B7E7E]">
                      Projects Completed
                    </p>
                  </div>
                </div>

                <div className="h-9 w-px bg-[#123F42]/15" />

                {/* Stat 03 */}
                <div className="flex items-center gap-2.5 pl-7">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#397275]/30">
                    <ShieldCheck size={14} className="text-[#397275]" />
                  </div>

                  <div>
                    <p className="font-serif text-[21px] leading-none text-[#123F42]">
                      100%
                    </p>

                    <p className="mt-1 text-[8px] text-[#6B7E7E]">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side Label */}
          <div className="absolute bottom-8 right-8 z-10 hidden max-w-[150px] text-right sm:block">
            <p className="font-serif text-[16px] italic leading-tight text-white drop-shadow-lg">
              Better Planning
              <br />
              Stronger Communities
            </p>
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="mx-auto max-w-[1250px] px-5 pb-10 pt-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                href="#services"
                key={service.title}
                className="group min-h-[125px] rounded-[3px] border border-[#E4E6DF] bg-[#FAFAF6] px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9D2CC] hover:bg-white hover:shadow-[0_10px_30px_rgba(18,63,66,0.06)]"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon
                    size={32}
                    strokeWidth={2}
                    className="text-[#397275] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[10px] font-bold text-[#173F42] sm:text-[11px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[8px] leading-3.5 text-[#7A8989] sm:text-[9px]">
                  {service.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroHome;

