import { Link, NavLink } from 'react-router-dom'

function Arrow() {
  return <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">{'\u2197'}</span>
}

export { Arrow }

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#e7e3e1] text-[#173f4d]">
      <header className="sticky top-0 z-50 border-b border-[#163f4d]/10 bg-[#e7e3e1]/90 shadow-[0_18px_45px_rgba(18,53,72,0.06)] backdrop-blur-2xl">
        <div className="bg-[#123548] text-[#edf3f3]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] sm:px-6 lg:px-8">
            <span>City Planning Consultants</span>
            <div className="hidden items-center gap-5 md:flex">
              <span>Projects</span>
              <span>Approvals</span>
              <span>Architectural</span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-3" to="/" aria-label="CPC home">
            <span className="flex items-center overflow-hidden rounded-sm bg-[#163f4d] text-sm font-bold text-[#f4f3f1] shadow-[0_10px_30px_rgba(22,63,77,0.18)]">
              <span className="flex h-11 w-9 items-center justify-center border-r border-white/10">C</span>
              <span className="flex h-11 w-9 items-center justify-center border-r border-white/10">P</span>
              <span className="flex h-11 w-9 items-center justify-center">C</span>
            </span>
            <span className="text-left text-[10px] font-semibold uppercase tracking-[0.24em] text-[#173f4d]">
              City Planning
              <br />
              Consultants
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative px-1 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-300 after:absolute after:inset-x-1 after:bottom-0 after:h-px after:origin-left after:bg-[#163f4d] after:transition-transform after:duration-300 ${
                    isActive ? 'text-[#163f4d] after:scale-x-100' : 'text-[#51686f] after:scale-x-0 hover:text-[#163f4d] hover:after:scale-x-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[#163f4d]/20 bg-[#163f4d] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f4f3f1] shadow-[0_14px_35px_rgba(22,63,77,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#123548] hover:shadow-[0_18px_44px_rgba(22,63,77,0.28)]"
          >
            Start a conversation
            <Arrow />
          </Link>
        </div>

        <div className="border-t border-[#163f4d]/10 bg-[#efeae6] md:hidden">
          <nav className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#51686f]" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `whitespace-nowrap rounded-full px-3 py-2 transition ${isActive ? 'bg-[#163f4d] text-white shadow-[0_10px_24px_rgba(22,63,77,0.18)]' : 'bg-white/70 text-[#51686f]'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="relative overflow-hidden bg-[#122d38] text-[#edf3f3]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link className="flex items-center gap-3" to="/">
                <span className="flex items-center overflow-hidden rounded-sm bg-[#163f4d] text-sm font-bold text-[#f4f3f1]">
                  <span className="flex h-9 w-7 items-center justify-center border-r border-white/10">C</span>
                  <span className="flex h-9 w-7 items-center justify-center border-r border-white/10">P</span>
                  <span className="flex h-9 w-7 items-center justify-center">C</span>
                </span>
                <span className="text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-[#edf3f3]">
                  City Planning
                  <br />
                  Consultants
                </span>
              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#c0d0d2]">
                We create integrated urban, architectural, and development strategies that turn land potential into lasting value.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dfe7e8]">Company</h3>
              <ul className="mt-5 space-y-3 text-sm text-[#c0d0d2]">
                <li><Link className="transition hover:text-white" to="/">About us</Link></li>
                <li><Link className="transition hover:text-white" to="/services">Services</Link></li>
                <li><Link className="transition hover:text-white" to="/projects">Projects</Link></li>
                <li><Link className="transition hover:text-white" to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dfe7e8]">Services</h3>
              <ul className="mt-5 space-y-3 text-sm text-[#c0d0d2]">
                <li>Master Planning</li>
                <li>Architecture</li>
                <li>Feasibility Studies</li>
                <li>Approvals</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dfe7e8]">Contact</h3>
              <ul className="mt-5 space-y-3 text-sm text-[#c0d0d2]">
                <li>info@cpc.com.pk</li>
                <li>Lahore, Pakistan</li>
                <li>Mon - Sat</li>
                <li>9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#c0d0d2] sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; 2026 CPC. All rights reserved.</span>
            <Link to="/" className="inline-flex items-center gap-2 text-[#edf3f3] transition hover:text-white">
              Back to top &uarr;
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
