import { Link } from 'react-router-dom'
import { Arrow } from '../components/SiteLayout'

const contactCards = [
  { label: 'Reach us', value: 'info@cpc.com.pk', href: 'mailto:info@cpc.com.pk' },
  { label: 'Location', value: 'Lahore, Pakistan' },
  { label: 'Office hours', value: 'Mon - Sat, 9:00 AM - 6:00 PM' },
]

export default function ContactPage() {
  return (
    <main className="bg-[#e7e3e1] text-[#173f4d] antialiased selection:bg-[#163f4d] selection:text-white">
      <section className="relative overflow-hidden border-b border-[#163f4d]/15 bg-[#163f4d] text-white">
        <img src="/images/v39.jpg.jpeg" alt="CPC consultation and project visualization" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f3c] via-[#123548]/95 to-[#123548]/50" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.7fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfe7e8]/90 sm:text-sm">
              Contact us
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[1.05]">
              Let's start somewhere.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#dfe7e8]/85 sm:text-lg sm:leading-8">
              Have a project in mind? Tell us about it and our team will guide you toward the right first steps.
            </p>
          </div>

          <div className="self-end rounded-[1.5rem] border border-white/15 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dfe7e8]">Project intake</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Planning, approvals, studies, design, and execution guidance.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 xl:gap-24">
          <div className="flex flex-col justify-between space-y-8 sm:space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#51686f]">
                Make an enquiry
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#173f4d] sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Good work starts here.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#51686f]">
                Share the basics and CPC will help define a practical next move for your site, society, building, or approval pathway.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => (
                <div key={card.label} className="group rounded-2xl border border-[#163f4d]/10 bg-[#f5f2f1]/90 p-6 shadow-[0_14px_38px_rgba(22,63,77,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#163f4d]/20 hover:bg-white hover:shadow-[0_24px_70px_rgba(22,63,77,0.1)] sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#51686f]">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a href={card.href} className="mt-3 block text-xl font-semibold tracking-tight text-[#173f4d] transition-colors group-hover:text-[#163f4d] sm:text-2xl">
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-xl font-semibold tracking-tight text-[#173f4d] sm:text-2xl">
                      {card.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form
            className="space-y-8 rounded-[2rem] border border-[#163f4d]/10 bg-white/95 p-6 shadow-[0_25px_80px_rgba(22,63,77,0.08)] backdrop-blur sm:p-10 lg:p-12"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#51686f]">
                Name
                <input type="text" name="name" placeholder="Your name" className="mt-3 w-full rounded-2xl border border-[#163f4d]/15 bg-[#f5f2f1] px-4 py-3 text-base font-medium normal-case tracking-normal text-[#173f4d] transition placeholder:text-[#7e9096] focus:border-[#163f4d] focus:bg-white focus:outline-none sm:text-lg" />
              </label>

              <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#51686f]">
                Email
                <input type="email" name="email" placeholder="you@company.com" className="mt-3 w-full rounded-2xl border border-[#163f4d]/15 bg-[#f5f2f1] px-4 py-3 text-base font-medium normal-case tracking-normal text-[#173f4d] transition placeholder:text-[#7e9096] focus:border-[#163f4d] focus:bg-white focus:outline-none sm:text-lg" />
              </label>
            </div>

            <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#51686f]">
              Service needed
              <select name="service" className="mt-3 w-full rounded-2xl border border-[#163f4d]/15 bg-[#f5f2f1] px-4 py-3 text-base font-medium normal-case tracking-normal text-[#173f4d] transition focus:border-[#163f4d] focus:bg-white focus:outline-none sm:text-lg">
                <option>Master Planning</option>
                <option>Architectural Design</option>
                <option>NOC Approvals</option>
                <option>Feasibility Study</option>
                <option>Project Execution</option>
              </select>
            </label>

            <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#51686f]">
              Tell us about the project
              <textarea name="message" rows="5" placeholder="A few words about what you are planning..." className="mt-3 w-full resize-none rounded-2xl border border-[#163f4d]/15 bg-[#f5f2f1] px-4 py-3 text-base font-medium normal-case tracking-normal text-[#173f4d] transition placeholder:text-[#7e9096] focus:border-[#163f4d] focus:bg-white focus:outline-none sm:text-lg" />
            </label>

            <button type="submit" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#163f4d] px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_18px_44px_rgba(22,63,77,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123548] hover:shadow-[0_24px_60px_rgba(22,63,77,0.28)] focus:outline-none focus:ring-2 focus:ring-[#163f4d] focus:ring-offset-2 sm:w-auto">
              <span>Send enquiry</span>
              <Arrow />
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-[#163f4d]/10 bg-transparent py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#51686f] sm:px-8 sm:text-left md:flex-row lg:px-12">
          <a href="mailto:info@cpc.com.pk" className="transition-colors hover:text-[#173f4d]">
            info@cpc.com.pk
          </a>
          <p>Lahore, Pakistan</p>
          <Link to="/" className="group inline-flex items-center gap-2 text-[#173f4d] transition-colors hover:text-[#123548]">
            <span>Back to home</span>
            <Arrow />
          </Link>
        </div>
      </section>
    </main>
  )
}
