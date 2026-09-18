export default function PerformanceStrip() {
  return (
    <section className="border-y border-[#163f4d]/10 bg-[#f1efee] py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 text-center sm:grid-cols-3 sm:text-left sm:px-6 lg:px-8">
        {[
          { value: 'Master plans', label: 'Urban strategy and land-use direction' },
          { value: 'Architectural design', label: 'Context-driven spaces with refined detailing' },
          { value: 'Development advisory', label: 'Approvals, execution support, and delivery leadership' },
        ].map((item) => (
          <div key={item.value} className="rounded-2xl border border-[#163f4d]/10 bg-white/80 p-5 shadow-sm">
            <div className="text-xl font-semibold tracking-[-0.06em] text-[#173f4d]">{item.value}</div>
            <div className="mt-2 text-sm leading-6 text-[#51686f]">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
