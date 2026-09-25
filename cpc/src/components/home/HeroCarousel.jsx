import { useEffect, useState } from 'react'

const slides = [
  {
    eyebrow: 'Urban vision',
    title: 'Planning places with lasting value.',
    description:
      'We craft forward-thinking communities, mixed-use destinations, and resilient urban frameworks that elevate everyday life.',
    tag: 'Master planning',
  },
  {
    eyebrow: 'Architectural excellence',
    title: 'Design that balances elegance and utility.',
    description:
      'From concept development to elegant detailing, our architecture practice turns ambition into beautifully resolved spaces.',
    tag: 'Architecture',
  },
  {
    eyebrow: 'Project delivery',
    title: 'Precision from feasibility to execution.',
    description:
      'Our multidisciplinary team guides projects through approvals, technical coordination, and strategic implementation with confidence.',
    tag: 'Development',
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const slide = slides[activeIndex]

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#163f4d]/20 bg-[#163f4d] text-white shadow-[0_40px_120px_rgba(22,63,77,0.22)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(135deg,_rgba(17,60,74,1),_rgba(8,33,41,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25" />

      <div className="relative grid gap-10 px-6 py-8 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-14">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-300">
            <span className="inline-block h-px w-8 bg-[#dfe7e8]" />
            {slide.eyebrow}
          </div>

          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">City planning consultants (CPC) pvt. ltd.</p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.08em] text-white sm:text-5xl lg:text-7xl">
              {slide.title}
            </h1>
          </div>

          <p className="max-w-lg text-base leading-7 text-stone-300 sm:text-lg">{slide.description}</p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#f0f3f2] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#163f4d] transition hover:bg-white">
              Book a consultation
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/10">
              View portfolio
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-300">
              <span>Signature focus</span>
              <span className="text-[#dfe7e8]">{slide.tag}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              {[
                { value: '15+', label: 'Years of expertise' },
                { value: '40+', label: 'Project disciplines' },
                { value: '100%', label: 'Client-first approach' },
                { value: 'LHR', label: 'Based in Lahore' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-stone-900/60 p-4">
                  <div className="text-2xl font-semibold tracking-[-0.06em] text-[#dfe7e8]">{stat.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-stone-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-12 bg-[#f0f3f2]' : 'w-5 bg-white/30'}`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
