import ProjectCard from '../components/ProjectCard'

const projects = [
  { type: 'Master Planning', title: 'Etihad Town Phase 3', meta: 'Raiwind Road, Lahore / 9761 kanals', image: '/images/cover2.jpg', className: 'project-one' },
  { type: 'Housing Scheme', title: 'Fazaia Phase-I', meta: 'Raiwind Road, Lahore / 3925.73 kanals', image: '/images/01.jpg', className: 'project-two' },
  { type: 'Master Planning', title: 'Fazaia Housing Scheme', meta: 'Sargodha / 1327.007 kanals', image: '/images/03.jpg', className: 'project-three' },
  { type: 'Town Planning', title: 'Etihad Town Sialkot', meta: 'Daska-Sialkot Road / 2509.69 kanals', image: '/images/top1.jpg', className: 'project-four' },
  { type: 'Town Planning', title: 'Alhamra Town', meta: 'Raiwind, Lahore / 374.92 kanals', image: '/images/1.jpg', className: 'project-five' },
  { type: 'Zoning Plan', title: 'Barkah City', meta: 'Urban zoning and land-use planning', image: '/images/2.jpg', className: 'project-six' },
  { type: 'Housing Society', title: "Banker's Avenue", meta: 'Bedian Road, Lahore / 2774.85 kanals', image: '/images/3.jpg', className: 'project-seven' },
  { type: 'Housing Scheme', title: 'Icon Valley Phase-II', meta: 'Raiwind, Lahore / 564.30 kanals', image: '/images/4.jpg', className: 'project-eight' },
]

export default function ProjectsPage() {
  return (
    <main className="bg-[#163f4d] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#123548]">
        <img src="/images/cover2.jpg" alt="CPC featured urban project" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f3c] via-[#123548]/95 to-[#123548]/45" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">Our projects</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">Ideas made visible.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#dfe7e8]">
            A growing portfolio of plans, places, and possibilities shaped for meaningful urban impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#dfe7e8]">
          <span className="rounded-full border border-white/10 bg-white/15 px-4 py-2 text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur">All work</span>
          <span className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10">Town planning</span>
          <span className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10">Architectural</span>
          <span className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10">Approvals</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </section>
    </main>
  )
}
