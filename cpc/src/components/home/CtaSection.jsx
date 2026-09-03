export default function CtaSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#163f4d]/20 bg-gradient-to-r from-[#163f4d] via-[#123548] to-[#163f4d] p-8 text-white shadow-[0_30px_90px_rgba(22,63,77,0.18)] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dfe7e8]">Start your next project</p>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.07em] sm:text-5xl lg:text-6xl">
                Let’s shape a more intelligent place together.
              </h2>
            </div>

            <button className="inline-flex items-center justify-center rounded-full bg-[#f0f3f2] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#163f4d] transition hover:bg-white">
              Contact CPC
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
