import { ArrowRight, Eye, Handshake, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Experienced team",
    text: "Skilled professionals with proven planning and design expertise.",
    icon: Eye,
  },
  {
    title: "Client focused",
    text: "Your vision guides our process from first idea to final delivery.",
    icon: Handshake,
  },
  {
    title: "Sustainable solutions",
    text: "Practical decisions that support a better future for communities.",
    icon: Leaf,
  },
];

export default function AboutStory() {
  return (
    <section className="bg-[#f8f8f3] px-6 py-20 sm:py-24 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
              Why CPC
            </p>

            <h2 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-[-1px] text-[#123f42] sm:text-5xl">
              Better planning.
              <br />
              Stronger communities.
            </h2>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#123f42]"
            >
              Work with us
              <ArrowRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Values */}
          <div className="grid gap-8 border-t border-[#123f42]/20 pt-2 sm:gap-10 md:grid-cols-3">
            {values.map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="border-b border-[#123f42]/10 pb-8 pt-6 md:border-b-0 md:pb-0"
              >
                <Icon
                  size={26}
                  strokeWidth={1.3}
                  className="text-[#b79538]"
                />

                <h3 className="mt-7 text-xl font-medium text-[#123f42]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#577071]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}