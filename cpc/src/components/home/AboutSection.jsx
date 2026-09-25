export default function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#163f4d]">About CPC</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] text-[#173f4d] sm:text-5xl lg:text-6xl">
              We shape urban environments with clarity, conviction, and long-term value.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#51686f] sm:text-lg">
            CPC brings together strategic planning, architecture, and execution expertise to create places that work beautifully for people, institutions, and communities.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Town planning', text: 'Master plans, layout design, and urban frameworks built for growth.', badge: '01' },
            { title: 'Architecture', text: 'Human-centered design from concept through coordinated delivery.', badge: '02' },
            { title: 'Development support', text: 'Feasibility, approvals, and execution guidance that reduce risk.', badge: '03' },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-[#163f4d]/10 bg-[#f5f3f1] p-6 shadow-[0_20px_60px_rgba(22,63,77,0.06)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#163f4d]">{item.badge}</span>
                <span className="h-8 w-8 rounded-full border border-[#163f4d]/20 bg-white" />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.06em] text-[#173f4d]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#51686f]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
