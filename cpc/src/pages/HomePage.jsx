import { Link } from 'react-router-dom'
import { Arrow } from '../components/SiteLayout'

const quickFilters = ['Master Plans', 'Housing Schemes', 'Architectural Design', 'NOCs & Approvals']

const focusCards = [
  { title: 'Town Planning', text: 'Urban strategies designed to make growth more coherent, inclusive, and enduring.' },
  { title: 'Architectural Design', text: 'Concept-driven spaces rooted in function, elegance, and contextual intelligence.' },
  { title: 'Project Studies', text: 'Feasibility, assessments, and technical advisory before major commitments are made.' },
  { title: 'Infrastructure', text: 'Integrated systems and utilities that support resilient future-ready communities.' },
]

const featuredProjects = [
  { title: 'Etihad Town Phase 3', type: 'Master Planning', meta: 'Raiwind Road, Lahore', image: '/images/cover2.jpg' },
  { title: 'Fazaia Phase-I', type: 'Housing Scheme', meta: 'Raiwind Road, Lahore', image: '/images/01.jpg' },
  { title: "Banker's Avenue", type: 'Housing Society', meta: 'Bedian Road, Lahore', image: '/images/03.jpg' },
  { title: 'Etihad Town Sialkot', type: 'Town Planning', meta: 'Daska-Sialkot Road', image: '/images/top1.jpg' },
]

const processSteps = [
  { title: 'Study', text: 'Site context, approvals, feasibility, and market direction are translated into a clear brief.' },
  { title: 'Shape', text: 'Planning and architecture teams refine the spatial idea through coordinated design decisions.' },
  { title: 'Deliver', text: 'Submissions, visuals, and execution guidance keep the project moving with confidence.' },
]

const teamMembers = [
  { name: 'Abdul Razzaq', role: 'Planning Lead', image: '/team/Abdul Razzaq.jpeg' },
  { name: 'Abdul Wahab', role: 'Urban Designer', image: '/team/Abdul Wahab.jpeg' },
  { name: 'Adeel', role: 'Architectural Team', image: '/team/Adeel.png' },
  { name: 'Anas', role: 'Design Coordination', image: '/team/Anas.png' },
]

export default function HomePage() {
  return (
    <main className="bg-[#e7e3e1] text-[#173f4d]">
      <section className="relative overflow-hidden bg-[#123548] pb-16 pt-8 text-white sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#163f4d] shadow-[0_35px_100px_rgba(18,53,72,0.28)] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">Urban vision and architectural precision</p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-5xl lg:text-7xl">Planning places with lasting value.</h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#dfe7e8] sm:text-lg">
                CPC creates strategic urban frameworks, thoughtful architecture, and high-impact development guidance for communities and clients that expect excellence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="group inline-flex items-center gap-2 rounded-full bg-[#f4f3f1] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#163f4d] shadow-[0_16px_38px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-white">
                  Explore projects
                  <Arrow />
                </Link>
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Book consultation
                  <Arrow />
                </Link>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
                {[
                  { value: '15+', label: 'Years' },
                  { value: '40+', label: 'Disciplines' },
                  { value: '100%', label: 'Client focus' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <div className="text-2xl font-semibold tracking-[-0.04em]">{stat.value}</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#dfe7e8]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[#102f3c]">
              <video
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                src="/ColonyAnimation.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/top4.jpg"
                aria-label="CPC animated project showcase video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f3c]/85 via-[#102f3c]/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_28%)]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/15 bg-white/12 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dfe7e8]">
                  <span>Featured capability</span>
                  <span>Planning</span>
                </div>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Master plans, approvals, visuals, and delivery strategy under one roof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-3">
          {quickFilters.map((item) => (
            <span key={item} className="rounded-full border border-[#163f4d]/15 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#173f4d] shadow-[0_10px_25px_rgba(22,63,77,0.04)] transition duration-300 hover:-translate-y-0.5 hover:bg-white">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#51686f]">What we do</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#173f4d] sm:text-5xl">A disciplined approach to better places.</h2>
          </div>
          <Link to="/services" className="group hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#163f4d] md:inline-flex">View all services <Arrow /></Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusCards.map((card, index) => (
            <div key={card.title} className="group rounded-[1.6rem] border border-[#163f4d]/10 bg-white/85 p-6 shadow-[0_18px_55px_rgba(22,63,77,0.05)] backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_80px_rgba(22,63,77,0.12)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#163f4d] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,63,77,0.22)] transition duration-300 group-hover:scale-105">0{index + 1}</div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#173f4d]">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#51686f]">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#163f4d] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">Featured work</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Selected project highlights.</h2>
            </div>
            <Link to="/projects" className="group hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f4f3f1] md:inline-flex">View all projects <Arrow /></Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1.5 hover:bg-white/10">
                <div className="h-52 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dfe7e8]">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-[#dfe7e8]">{project.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-[#163f4d]/10 shadow-[0_25px_80px_rgba(22,63,77,0.08)]">
            <img src="/images/Parliament1.jpg" alt="CPC architectural and planning presentation" className="h-full min-h-[420px] w-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-[#163f4d]/10 bg-white p-8 shadow-[0_25px_80px_rgba(22,63,77,0.06)] sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#51686f]">How we work</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#173f4d] sm:text-5xl">A quieter, sharper process for complex development decisions.</h2>
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="group rounded-2xl border border-[#163f4d]/10 bg-[#f2f0ee] p-5 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(22,63,77,0.08)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163f4d] text-[11px] font-semibold text-white">0{index + 1}</span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#173f4d]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#51686f]">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#51686f]">Our team</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#173f4d] sm:text-5xl">Meet the people behind the vision.</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group overflow-hidden rounded-[1.5rem] border border-[#163f4d]/10 bg-white shadow-[0_18px_55px_rgba(22,63,77,0.05)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(22,63,77,0.12)]">
              <div className="aspect-square overflow-hidden bg-[#f5f3f1]">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#173f4d]">{member.name}</h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#51686f]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#163f4d] p-8 text-white shadow-[0_28px_90px_rgba(22,63,77,0.2)] sm:p-10 lg:p-12">
          <img src="/images/gate_10 - Photo.jpg" alt="CPC development project entrance" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102f3c] via-[#102f3c]/90 to-[#102f3c]/40" />
          <div className="relative max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">Let's talk</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Need a smarter path for your next project?</h2>
            <p className="mt-5 text-base leading-7 text-[#dfe7e8]">
              Tell us what you are planning and we will help translate vision into a clear, actionable strategy.
            </p>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#f4f3f1] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#163f4d] transition duration-300 hover:-translate-y-0.5 hover:bg-white">
              Contact CPC
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
