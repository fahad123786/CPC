
const steps = [
    {
        number: "01",
        title: "Plan",
        description: "Understand your goals and analyze the site.",
    },
    {
        number: "02",
        title: "Design",
        description: "Create meaningful and practical solutions.",
    },
    {
        number: "03",
        title: "Develop",
        description: "Turn plans into high-quality products.",
    },
    {
        number: "04",
        title: "Deliver",
        description: "Support and improve long-term success.",
    },
];

const Approach = () => {
    return (
        <section className="w-full bg-[#f7f8f5]">

            {/* =====================================================
          APPROACH SECTION
      ====================================================== */}
            <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20 xl:px-14">

                <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.75fr] xl:gap-16">

                    {/* ================= LEFT CONTENT ================= */}
                    <div>
                        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                            How We Work
                        </p>

                        <h2 className="text-4xl font-medium leading-[1.08] tracking-tight text-[#123c3a] md:text-5xl xl:text-[52px]">
                            <span className="whitespace-nowrap">
                                A Structured Approach
                            </span>
                            <br />
                            <span>to Successful Projects</span>
                        </h2>

                        <p className="mt-6 max-w-md text-sm leading-6 text-gray-500">
                            From concept to completion, we follow a clear and collaborative
                            process to ensure quality, efficiency and lasting results.
                        </p>

                        <button
                            className="
                mt-8
                rounded-full
                bg-[#123c3a]
                px-7
                py-3.5
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#1b5551]
                hover:shadow-lg
              "
                        >
                            Our Process
                            <span className="ml-3">→</span>
                        </button>
                    </div>

                    {/* =================================================
              SINGLE PROCESS CARD
          ================================================== */}
                    <div className="w-full min-w-0">

                        {/* ================= DESKTOP ================= */}
                        <div
                            className="
                hidden
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-3
                xl:block
              "
                        >
                            <div className="grid grid-cols-4">

                                {steps.map((step, index) => (
                                    <div
                                        key={step.number}
                                        className={`
                      group
                      relative
                      min-w-0
                      rounded-xl
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                      ${index !== 0 ? "border-l border-gray-100" : ""}
                    `}
                                    >
                                        {/* Number */}
                                        <div
                                            className="
                        mb-6
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#123c3a]
                        text-[11px]
                        font-semibold
                        text-white
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                                        >
                                            {step.number}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="
                        text-base
                        font-medium
                        text-[#123c3a]
                        transition-all
                        duration-300
                        group-hover:font-bold
                      "
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 text-[11px] leading-5 text-gray-500">
                                            {step.description}
                                        </p>

                                        {/* Arrow */}
                                        {index !== steps.length - 1 && (
                                            <span
                                                className="
                          absolute
                          right-1
                          top-1/2
                          -translate-y-1/2
                          text-xl
                          font-light
                          text-gray-300
                        "
                                            >
                                                ›
                                            </span>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* ================= TABLET ================= */}
                        <div
                            className="
                hidden
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-3
                md:block
                xl:hidden
              "
                        >
                            <div className="grid grid-cols-2">

                                {steps.map((step, index) => (
                                    <div
                                        key={step.number}
                                        className={`
                      group
                      relative
                      min-w-0
                      p-6
                      transition-all
                      duration-300
                      hover:bg-[#fafbf9]
                      hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                      ${index >= 2 ? "border-t border-gray-100" : ""}
                      ${index % 2 !== 0 ? "border-l border-gray-100" : ""}
                    `}
                                    >
                                        {/* Number */}
                                        <div
                                            className="
                        mb-6
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#123c3a]
                        text-[11px]
                        font-semibold
                        text-white
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                                        >
                                            {step.number}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="
                        text-base
                        font-medium
                        text-[#123c3a]
                        transition-all
                        duration-300
                        group-hover:font-bold
                      "
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 text-[11px] leading-5 text-gray-500">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* ================= MOBILE ================= */}
                        <div
                            className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-3
                md:hidden
              "
                        >
                            <div className="grid grid-cols-1">

                                {steps.map((step, index) => (
                                    <div
                                        key={step.number}
                                        className={`
                      group
                      relative
                      p-6
                      transition-all
                      duration-300
                      hover:bg-[#fafbf9]
                      hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                      ${index !== 0 ? "border-t border-gray-100" : ""}
                    `}
                                    >
                                        {/* Number */}
                                        <div
                                            className="
                        mb-6
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#123c3a]
                        text-[10px]
                        font-semibold
                        text-white
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                                        >
                                            {step.number}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="
                        text-base
                        font-medium
                        text-[#123c3a]
                        transition-all
                        duration-300
                        group-hover:font-bold
                      "
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 text-xs leading-5 text-gray-500">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* =====================================================
          IMPACT / STATS SECTION
      ====================================================== */}
            <div className="relative min-h-[280px] overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://i.pinimg.com/736x/15/17/10/1517105df64b80de27bd454a56b0445a.jpg"
                    alt="Across Pakistan"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#082f2e]/75" />

                <div className="relative mx-auto flex min-h-[280px] max-w-[1400px] items-center px-6 py-12 lg:px-10 xl:px-14">

                    <div className="grid w-full items-center gap-12 md:grid-cols-[1.1fr_1.9fr] xl:gap-20">

                        {/* ================= IMPACT TEXT ================= */}
                        <div>
                            <h3 className="text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
                                Building Impact
                                <br />
                                Across Pakistan
                            </h3>

                            <p className="mt-4 max-w-md text-xs leading-5 text-white/70">
                                Trusted by homeowners, government and private clients to
                                deliver high-quality designs and solutions.
                            </p>
                        </div>

                        {/* ================= STATS ================= */}
                        <div className="grid grid-cols-3">

                            {/* 15+ */}
                            <div className="px-5 text-center md:px-10 xl:px-14">
                                <p className="text-3xl font-bold text-white md:text-4xl">
                                    15+
                                </p>

                                <p className="mx-auto mt-2 max-w-[130px] text-[10px] font-medium uppercase leading-4 tracking-[0.12em] text-white/65 md:text-xs">
                                    Years of Experience
                                </p>
                            </div>

                            {/* 40+ */}
                            <div className="relative px-5 text-center md:px-10 xl:px-14">

                                <span className="absolute left-0 top-1/2 h-16 w-px -translate-y-1/2 bg-white/30" />

                                <p className="text-3xl font-bold text-white md:text-4xl">
                                    40+
                                </p>

                                <p className="mx-auto mt-2 max-w-[130px] text-[10px] font-medium uppercase leading-4 tracking-[0.12em] text-white/65 md:text-xs">
                                    Projects Completed
                                </p>
                            </div>

                            {/* 100% */}
                            <div className="relative px-5 text-center md:px-10 xl:px-14">

                                <span className="absolute left-0 top-1/2 h-16 w-px -translate-y-1/2 bg-white/30" />

                                <p className="text-3xl font-bold text-white md:text-4xl">
                                    100%
                                </p>

                                <p className="mx-auto mt-2 max-w-[130px] text-[10px] font-medium uppercase leading-4 tracking-[0.12em] text-white/65 md:text-xs">
                                    Client Satisfaction
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Approach;