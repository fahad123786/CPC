import { ArrowDownRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="bg-[#edf1ed] px-6 pb-16 pt-12 lg:px-16 lg:pb-24 lg:pt-10">
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
                    <span className="h-px w-10 bg-[#b79538]" />
                    Start a consultation
                </div>

                <div className="grid gap-5 lg:grid-cols-[.92fr_1.08fr]">
                    <div className="flex min-h-[520px] flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_18px_55px_rgba(18,63,66,0.08)] sm:p-12 lg:p-14">
                        <div>
                            <p className="text-sm font-medium text-[#577071]">City Planning Consultants</p>
                            <h1 className="mt-8 max-w-xl font-serif text-5xl leading-[.95] tracking-[-2px] text-[#123f42] sm:text-6xl lg:text-[72px]">
                                Let’s build a better tomorrow.
                            </h1>
                            <p className="mt-8 max-w-md text-base leading-7 text-[#577071]">
                                Bring us your idea, your challenge or your next big move. We will help shape it into a place with purpose.
                            </p>
                        </div>

                        <div className="mt-12 flex items-end justify-between border-t border-[#123f42]/10 pt-6">
                            <div className="space-y-4 text-sm text-[#315355]">
                                <p className="flex items-center gap-3"><Mail size={16} className="text-[#b79538]" /> info@cityplanningconsultant.com</p>
                                <p className="flex items-center gap-3"><Phone size={16} className="text-[#b79538]" /> +92 300 1234567</p>
                                <p className="flex items-center gap-3"><MapPin size={16} className="text-[#b79538]" /> Lahore, Pakistan</p>
                            </div>
                            <span className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#123f42] text-white sm:flex"><ArrowDownRight size={22} /></span>
                        </div>
                    </div>

                    <div className="group relative min-h-[520px] overflow-hidden rounded-[1.75rem] bg-[#123f42] shadow-[0_18px_55px_rgba(18,63,66,0.14)]">
                        <img src="/images/3.jpg" alt="CPC planning and architecture project" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#073f42]/95 via-[#073f42]/25 to-transparent" />
                        <div className="absolute left-7 top-7 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[2px] text-[#073F42] backdrop-blur-sm">Lahore · Pakistan</div>
                        <div className="absolute bottom-8 left-7 right-7 text-white sm:bottom-12 sm:left-10 sm:right-10">
                            <p className="text-xs uppercase tracking-[3px] text-[#d8bf72]">Better planning / stronger communities</p>
                            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight sm:text-5xl">Every project starts with a conversation.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}