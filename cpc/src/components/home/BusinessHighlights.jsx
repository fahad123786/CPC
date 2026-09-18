const pillars = [
  { name: 'Master planning', detail: 'Vision-led urban frameworks and layout planning for sustainable growth.' },
  { name: 'Architectural design', detail: 'Elegant, efficient spaces conceived for function, context, and identity.' },
  { name: 'Project studies', detail: 'Feasibility, surveys, site analysis, and technical assessments before commitment.' },
  { name: 'Infrastructure design', detail: 'Integrated civil and utility planning to future-proof communities and investments.' },
  { name: 'Approvals & NOCs', detail: 'Expert navigation through agencies, compliance, and project clearances.' },
  { name: 'Execution support', detail: 'On-site coordination and strategic management from planning to delivery.' },
]

export default function BusinessHighlights() {
  return (
    <section className="bg-[#163f4d] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">Business focus</p>
            <h2 className="text-4xl font-semibold tracking-[-0.07em] sm:text-5xl lg:text-6xl">Disciplines built for real-world growth.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#dfe7e8]">
            We support public and private stakeholders with integrated planning and design solutions that move projects confidently from ambition to delivery.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={pillar.name} className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/10">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#dfe7e8]">0{index + 1}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-white transition group-hover:border-white/30">↗</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{pillar.name}</h3>
              <p className="mt-4 text-base leading-7 text-[#dfe7e8]">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
