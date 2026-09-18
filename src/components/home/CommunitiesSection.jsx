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
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-[3px] text-gray-500 mb-2">
                            WHAT OUR CLIENTS SAY
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Trusted by Businesses & Communities
                        </h2>
                    </div>

                    <button className="hidden md:flex items-center gap-2 text-gray-700 font-medium hover:text-black transition">
                        View All Testimonials
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="text-5xl text-gray-300 leading-none mb-4">
                                “
                            </div>

                            <p className="text-gray-600 leading-7 mb-8 text-sm">
                                {item.review}
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
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

                {/* CTA Banner */}
                <div className="relative overflow-hidden rounded-3xl min-h-[320px]">
                    {/* Background Image */}
                    <img
                        src="https://i.pinimg.com/1200x/f8/3a/41/f83a413f0f7f2724dfa94067dd2a4565.jpg"
                        alt="City"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0C3B39]/95 via-[#0C3B39]/80 to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 flex items-center h-full">
                        <div className="max-w-xl">
                            <span className="text-xs tracking-[3px] text-white/70 uppercase">
                                Let's Talk
                            </span>

                            <h3 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
                                Ready to Build a Smarter,
                                <br />
                                More Sustainable Future?
                            </h3>

                            <p className="text-white/80 mb-8">
                                Get in touch with our team for a free consultation and
                                let's discuss how we can bring your vision to life.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                                    Contact Us
                                </button>

                                <button className="border border-white/40 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition">
                                    +92 300 1234567
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Button */}
                <div className="mt-6 flex justify-center md:hidden">
                    <button className="flex items-center gap-2 text-gray-700 font-medium">
                        View All Testimonials
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CommunitiesSection;