import { Link } from 'react-router-dom'
import { Arrow } from './SiteLayout'

export default function ServiceCard({ number, title, text, items }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-[#163f4d]/10 bg-white/90 p-6 shadow-[0_18px_60px_rgba(22,63,77,0.06)] backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-[#163f4d]/20 hover:shadow-[0_28px_80px_rgba(22,63,77,0.13)] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#163f4d] via-[#d7c7a1] to-[#163f4d] opacity-70" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full border border-[#163f4d]/10 transition duration-700 group-hover:scale-125" />

      <div className="relative mb-6 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.24em] text-[#51686f]">
        <span>{number}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#163f4d]/10 bg-[#f3f1ef] text-[#163f4d] shadow-inner transition duration-300 group-hover:bg-[#163f4d] group-hover:text-white">+</span>
      </div>

      <h3 className="relative text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#173f4d] sm:text-3xl">{title}</h3>
      <p className="relative mt-4 max-w-md text-base leading-7 text-[#51686f]">{text}</p>

      <ul className="relative mt-7 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center justify-between gap-4 border-b border-[#163f4d]/10 pb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#51686f] transition duration-300 group-hover:border-[#163f4d]/15">
            <span>{item}</span>
            <span className="text-sm text-[#163f4d]">+</span>
          </li>
        ))}
      </ul>

      <Link
        className="group relative mt-8 inline-flex items-center gap-2 rounded-full border border-[#163f4d] bg-[#163f4d] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f4f3f1] shadow-[0_14px_34px_rgba(22,63,77,0.2)] transition duration-300 hover:bg-[#123548] hover:shadow-[0_18px_44px_rgba(22,63,77,0.25)]"
        to="/contact"
        aria-label={`Learn more about ${title}`}
      >
        Explore
        <Arrow />
      </Link>
    </article>
  )
}
