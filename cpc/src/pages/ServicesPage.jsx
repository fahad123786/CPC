import ServiceCard from '../components/ServiceCard'

const services = [
  { number: '01', title: 'Master Planning & Urban Development', text: 'Strategic plans that turn land, policy, and growth into connected communities.', items: ['Master Plans', 'Housing Scheme Planning', 'Layout Planning & Submissions', 'Action Area Plans', 'Marketing Plans & Renders', 'Geospatial Services'] },
  { number: '02', title: 'Architectural & Design', text: 'Comprehensive architectural solutions from concept through coordination and delivery.', items: ['Architecture and Design', 'Interior Design', 'Engineering Solutions', 'Construction Management', 'Visualization Services', '3D Modeling'] },
  { number: '03', title: 'Project Preliminary Studies', text: 'Feasibility insight for informed investment and development decisions.', items: ['Topographic Surveys', 'EIA & TIA', 'Soil Investigations', 'Site Feasibility Analysis', 'Authority Submissions'] },
  { number: '04', title: 'Infrastructure & Services Design', text: 'Robust, future-ready systems designed to support resilient urban growth.', items: ['Transportation Systems', 'Water Management', 'Telecommunications', 'Energy Systems', 'Utilities'] },
  { number: '05', title: 'Legal Support & NOC Approvals', text: 'Professional guidance through approvals and coordination with relevant agencies.', items: ['TEPA', 'WASA', 'Civil Defence', 'Ring Road Authority', 'EPA'] },
  { number: '06', title: 'Project Development & Execution', text: 'End-to-end project management focused on efficiency, cost savings, and collaboration.', items: ['Project Management', 'Stakeholder Coordination', 'Development Supervision', 'Execution Support'] },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#e7e3e1] text-[#173f4d]">
      <section className="relative overflow-hidden border-b border-[#163f4d]/10 bg-[#163f4d] text-white">
        <img src="/images/A15.jpg" alt="CPC planning and architecture service preview" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f3c] via-[#123548]/95 to-[#123548]/55" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">Our services</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">Planning with purpose.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#dfe7e8]">
              CPC brings urban intelligence and architectural imagination together to create places that work beautifully.
            </p>
          </div>
          <div className="self-end rounded-[1.5rem] border border-white/15 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dfe7e8]">Integrated practice</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {['Planning', 'Architecture', 'Approvals', 'Execution'].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard {...service} key={service.number} />
          ))}
        </div>
      </section>

      <section className="border-t border-[#163f4d]/10 bg-[#f3f1ef] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#51686f]">A joined-up practice</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#173f4d] sm:text-5xl lg:text-6xl">
              From feasibility through delivery, every decision has a place in the bigger picture.
            </h2>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-[#163f4d]/10 shadow-[0_25px_70px_rgba(22,63,77,0.08)]">
            <img src="/images/v33.jpg.jpeg" alt="CPC project visualization" className="h-full min-h-[320px] w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        </div>
      </section>
    </main>
  )
}
