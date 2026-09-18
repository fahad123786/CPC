import { ArrowRight } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, ABC Company",
        image:
            "https://i.pinimg.com/1200x/17/bc/0d/17bc0d65175d3a14df74bced24c62ef2.jpg",
        review:
            "CPC delivered an exceptional service for our housing scheme. Their professionalism, expertise, and attention to detail exceeded our expectations from start to finish.",
    },
    {
        name: "Sara Khan",
        role: "Town Planning Officer",
        image:
            "https://i.pinimg.com/736x/5e/50/e9/5e50e96a3c349c43e852f0e39f1a10eb.jpg",
        review:
            "The team at CPC is highly skilled and responsive. Their thoughtful approach helped us create a sustainable and well-designed development plan.",
    },
    {
        name: "Faisal Mahmood",
        role: "CEO, Development Group",
        image:
            "https://i.pinimg.com/736x/a9/8f/90/a98f90975f1a41427e605f7655e577c3.jpg",
        review:
            "Professional, reliable, and results-oriented. CPC's solutions have made a positive impact on our project and long-term growth strategy.",
    },
];

const CommunitiesSection = () => {
    return (
        <section className="bg-white px-4 py-20 md:px-8">
            <div className="mx-auto max-w-7xl">

                {/* ================= HEADING ================= */}
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="mb-2 text-xs uppercase tracking-[3px] text-gray-500">
                            WHAT OUR CLIENTS SAY
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Trusted by Businesses & Communities
                        </h2>
                    </div>

                    <button className="hidden items-center gap-2 font-medium text-gray-700 transition hover:text-black md:flex">
                        View All Testimonials
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* ================= TESTIMONIALS ================= */}
                <div className="mb-10 grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="mb-4 text-5xl leading-none text-gray-300">
                                “
                            </div>

                            <p className="mb-8 text-sm leading-7 text-gray-600">
                                {item.review}
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {item.name}
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= CTA BANNER ================= */}
                <div className="relative min-h-[150px] overflow-hidden rounded-3xl">

                    {/* Background Image */}
                    <img
                        src="https://i.pinimg.com/1200x/f8/3a/41/f83a413f0f7f2724dfa94067dd2a4565.jpg"
                        alt="City"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0C3B39]/95 via-[#0C3B39]/80 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 flex min-h-[150px] items-center px-7 py-6 md:px-10 md:py-7">
                        <div className="max-w-2xl">

                            <span className="text-[10px] uppercase tracking-[3px] text-white/70">
                                Let's Talk
                            </span>

                            <h3 className="mt-2 mb-2 text-2xl font-bold leading-tight text-white md:text-3xl">
                                Ready to Build a Smarter,
                                <br />
                                More Sustainable Future?
                            </h3>

                            <p className="mb-4 max-w-xl text-xs leading-5 text-white/80 md:text-sm">
                                Get in touch with our team for a free consultation and
                                let's discuss how we can bring your vision to life.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <button className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-gray-900 transition hover:bg-gray-100">
                                    Contact Us
                                </button>

                                <button className="rounded-full border border-white/40 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-white/10">
                                    +92 300 1234567
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ================= MOBILE BUTTON ================= */}
                <div className="mt-6 flex justify-center md:hidden">
                    <button className="flex items-center gap-2 font-medium text-gray-700">
                        View All Testimonials
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CommunitiesSection;
