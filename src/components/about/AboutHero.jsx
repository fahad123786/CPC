export default function AboutHero() {
  return (
    <section className="bg-[#e8eee9] px-6 pb-10 pt-22 sm:pt-36 lg:px-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Eyebrow */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
          About CPC
        </p>

        {/* Heading */}
        <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-2px] text-[#123f42] sm:text-6xl md:text-7xl lg:text-[80px]">
          Your partner in
          <br />
          planning &amp; development.
        </h1>

        {/* Bottom Content */}
        <div className="mt-10 grid gap-8 border-t border-[#123f42]/20 pt-8 sm:mt-12 md:grid-cols-2">
          <p className="max-w-lg text-lg leading-8 text-[#315355] sm:text-xl">
            CPC is a leading urban planning, architecture and development
            consultancy in Pakistan.
          </p>

          <p className="max-w-md text-sm leading-7 text-[#577071] sm:text-base">
            For 15+ years, our experienced professionals have turned ideas
            into well-planned, efficient and future-ready spaces.
          </p>
        </div>
      </div>
    </section>
  );
}