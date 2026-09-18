import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    category: "MASTER PLANNING",
    title: "Royal Orchard",
    location: "Multan, Pakistan",
    image: "/images/01.jpg",
  },
  {
    category: "COMMERCIAL COMPLEX",
    title: "Bahria Town Icon Valley",
    location: "Karachi, Pakistan",
    image: "/images/03.jpg",
  },
  {
    category: "HOUSING SCHEME",
    title: "DHA City Phase 2",
    location: "Lahore, Pakistan",
    image: "/images/A15.jpg",
  },
  {
    category: "INFRASTRUCTURE",
    title: "Metro Bus Corridor",
    location: "Islamabad, Pakistan",
    image: "/images/top1.jpg",
  },
];

const Featured = () => {
  return (
    <section className="w-full bg-[#f7f7f4] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#123F42]">
              Featured Projects
            </p>

            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#123F42] sm:text-4xl lg:text-[44px]">
              Our Notable Projects
            </h2>
          </div>

          {/* View All */}
          <a
            href="#projects"
            className="group hidden items-center gap-2 text-xs font-medium text-[#123F42] transition hover:opacity-70 sm:flex"
          >
            <span>View All Projects</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* ================= CARDS ================= */}
        <div
          id="projects"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex min-h-[370px] flex-col overflow-hidden rounded-[6px] bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              {/* ================= IMAGE ================= */}
              <div className="relative h-[280px] shrink-0 overflow-hidden sm:h-[270px] lg:h-[280px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/5 transition duration-300 group-hover:bg-transparent" />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5">

                {/* Category */}
                <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123F42]/60">
                  {project.category}
                </p>

                {/* Project Title */}
                <h3 className="text-[16px] font-bold leading-tight text-[#123F42]">
                  {project.title}
                </h3>

                {/* Location + Arrow */}
                <div className="mt-3 flex items-center justify-between">

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-[10px] text-[#123F42]/60">
                    <MapPin
                      size={11}
                      strokeWidth={1.6}
                    />

                    <span>{project.location}</span>
                  </div>

                  {/* Arrow */}
                  <button
                    type="button"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#123F42]/20 text-[#123F42] transition-all duration-300 group-hover:border-[#123F42] group-hover:bg-[#123F42] group-hover:text-white"
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                    />
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE VIEW ALL ================= */}
        <div className="mt-7 flex sm:hidden">
          <a
            href="#projects"
            className="flex items-center gap-2 text-xs font-medium text-[#123F42]"
          >
            <span>View All Projects</span>

            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Featured;

