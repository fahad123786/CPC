export default function ProjectCard({ type, title, meta, image, className = '' }) {
  return (
    <article className={`group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-[0_18px_60px_rgba(10,27,35,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_rgba(10,27,35,0.18)] ${className}`}>
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#eef1f1] via-[#e6ecec] to-[#dfe7e8]">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        ) : (
          <>
            <div className="absolute inset-5 rounded-[1.2rem] border border-[#163f4d]/20 bg-[linear-gradient(rgba(22,63,77,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(22,63,77,0.12)_1px,transparent_1px)] bg-[size:28px_28px] opacity-80" />
            <div className="absolute inset-x-6 bottom-6 top-10 rounded-[1.2rem] border border-[#163f4d]/20 bg-white/40 backdrop-blur-sm" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102f3c]/70 via-[#102f3c]/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {type}
        </div>
      </div>

      <div className="relative bg-white p-5">
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-[#163f4d]/40 via-[#d7c7a1] to-transparent" />
        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#173f4d]">{title}</h3>
        <span className="mt-3 block text-[10px] font-medium uppercase tracking-[0.18em] text-[#51686f]">{meta}</span>
      </div>
    </article>
  )
}
