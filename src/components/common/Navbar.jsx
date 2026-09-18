import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#123F42]/10 bg-white/95 shadow-[0_4px_24px_rgba(18,63,66,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="font-serif text-[42px] leading-none tracking-[-2px] text-[#123F42]">
              CPC
            </span>

            <div className="h-10 w-px bg-[#123F42]/30"></div>

            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold tracking-[2px] text-[#123F42]">
                CITY PLANNING
              </span>
              <span className="text-[11px] font-semibold tracking-[2px] text-[#123F42]">
                CONSULTANTS
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="relative py-2 text-[13px] font-medium text-[#183F42]/80 transition-all duration-300 hover:text-[#123F42]"
            >
              {link.name}
              {({ isActive }) => isActive && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#B79538]"></span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden items-center gap-3 rounded-full bg-[#073F42] px-6 py-3 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#0B5558] lg:flex"
        >
          <span>Book a Consultation</span>

          <ArrowRight size={16} strokeWidth={1.8} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#123F42]/20 bg-white text-[#123F42] backdrop-blur-md lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 mt-1 overflow-hidden rounded-2xl border border-[#123F42]/10 bg-[#F8F8F3]/95 shadow-xl backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col px-5 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#123F42]/10 py-4 text-sm font-medium text-[#183F42]/80"
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#073F42] px-5 py-3.5 text-sm font-medium text-white"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;