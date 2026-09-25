import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Master Planning", href: "#services" },
    { name: "Architecture", href: "#services" },
    { name: "Housing Schemes", href: "#services" },
    { name: "Infrastructure", href: "#services" },
    { name: "NOCs & Approvals", href: "#services" },
  ];

  return (
    <footer className="bg-[#063C3D] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr] lg:gap-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              {/* CPC Logo */}
              <span className="font-serif text-[34px] leading-none tracking-[-2px] text-white">
                CPC
              </span>

              <div className="h-9 w-px bg-white/30"></div>

              <div className="flex flex-col leading-tight">
                <span className="text-[8px] font-semibold tracking-[1.5px] text-white">
                  CITY PLANNING
                </span>
                <span className="text-[8px] font-semibold tracking-[1.5px] text-white">
                  CONSULTANTS
                </span>
              </div>

            </div>

            <p className="mt-5 max-w-[310px] text-[11px] leading-5 text-white/60">
              We provide integrated planning, architectural and development
              solutions that create livable, sustainable and resilient
              communities.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2">

              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
              >
                <Facebook size={12} />
              </a>

              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
              >
                <Instagram size={12} />
              </a>

              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
              >
                <Linkedin size={12} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] text-white/55 transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-[11px] text-white/55 transition hover:text-white"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:info@cityplanningconsultant.com"
                className="flex items-start gap-3 text-[11px] text-white/55 transition hover:text-white"
              >
                <Mail size={13} className="mt-0.5 shrink-0" />
                <span>info@cityplanningconsultant.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-[11px] text-white/55">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span>
                  Lahore, Pakistan
                </span>
              </div>

              {/* Phone */}
              <a
                href="tel:+923001234567"
                className="flex items-start gap-3 text-[11px] text-white/55 transition hover:text-white"
              >
                <Phone size={13} className="mt-0.5 shrink-0" />
                <span>+92 300 1234567</span>
              </a>

              <p className="pt-1 text-[10px] text-white/40">
                Mon – Sat: 9:00 AM – 6:00 PM
              </p>

            </div>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="mt-10 border-t border-white/10 pt-5">

          <div className="flex flex-col gap-3 text-[9px] text-white/40 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} CPC. All Rights Reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>

            <p>
              Designed for a Better Tomorrow
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;