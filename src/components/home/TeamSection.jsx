const leadership = [
    {
        name: "Abdul Razaq",
        role: "CEO / Principal Town Planner",
        description: "Guides CPC's town-planning vision and leads projects toward thoughtful, lasting outcomes.",
        image: "/team/Abdul%20Razzaq.jpeg",
    },
    {
        name: "Saira Ashraf",
        role: "Managing Director / Lead Town Planner",
        description: "Leads town-planning work, shaping practical solutions around each project's goals.",
        image: "/team/Saira%20Ashraf.jpeg",
    },
];

const teamMembers = [
    {
        name: "Abdul Wahab",
        role: "Manager Architecture & Urban Design",
        description: "Brings architectural and urban design ideas together to create functional places.",
        image: "/team/Abdul%20Wahab.jpeg",
    },
    {
        name: "Hafsa Farooq",
        role: "Director Architecture & Landscape",
        description: "Connects architecture and landscape design to create cohesive environments.",
    },
    {
        name: "Kaleem Aslam",
        role: "Deputy Manager Landscape Design",
        description: "Develops landscape designs that balance usability, character, and care for place.",
        image: "/team/Kaleem.png",
    },
    {
        name: "Rana Zohaib",
        role: "Director Operations",
        description: "Coordinates CPC's operations to help teams and projects run smoothly.",
        image: "/team/R%20zohaib.jpeg",
       
        
    },
    {
        name: "Waqas Ahmed Raza",
        role: "Senior Advisor Urban Planning",
        description: "Advises and guides spatial planning, land-use planning, environmental planning, and sustainable urban development through professional planning expertise and evidence-based recommendations.",
        image: "/team/Waqas%20Ahmed%20Raza.jpeg",
    }
];

const TeamCard = ({ member }) => (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
        {member.image ? (
            <img
                src={member.image}
                alt={member.name}
                className={`aspect-4/3 w-full ${member.showFullImage ? " object-contain" : "object-cover object-top"}`}
                style={member.showFullImage ? { transform: "scale(1.19)" } : undefined}
                loading="lazy"
            />
        ) : (
            <div
                className="flex aspect-4/3 w-full items-center justify-center overflow-hidden bg-[#e8ece8]"
            >
                <svg
                    viewBox="0 0 448 448"
                    role="img"
                    aria-label={`Illustrated portrait of ${member.name}`}
                    className="h-full max-h-full w-auto"
                >
                    <circle cx="224" cy="224" r="210" fill="#70b3e2" />
                    <path
                        d="M112 390c8-65 7-212 20-276C143 57 177 32 224 32c64 0 99 43 105 105 7 75 2 187 14 253l-67 35H170z"
                        fill="#323540"
                    />
                    <path d="M194 250h60v71h-60z" fill="#f1bb82" />
                    <path
                        d="M147 158c0-69 30-111 78-111 52 0 77 42 77 111 0 63-35 115-77 115s-78-52-78-115z"
                        fill="#f7c995"
                    />
                    <path
                        d="M145 162c2-79 29-126 80-126 54 0 82 43 81 119-8 5-15 6-24 4-28-4-60-20-84-43-12 28-30 43-53 46z"
                        fill="#323540"
                    />
                    <path
                        d="M176 285c18 14 33 21 48 21 17 0 34-8 49-21l60 20c24 8 42 29 48 56l17 87H50l17-87c5-27 23-48 48-56z"
                        fill="#8b6f62"
                    />
                    <path d="m181 279 43 27-33 58-23-39 13-46zm86 0-43 27 33 58 23-39-13-46z" fill="#e94b68" />
                    <path d="m191 365 33-59 33 59-33 65z" fill="#e5b900" />
                    <circle cx="151" cy="178" r="17" fill="#f1bb82" />
                    <circle cx="297" cy="178" r="17" fill="#f1bb82" />
                    <circle cx="149" cy="180" r="3" fill="#fff" />
                    <circle cx="299" cy="180" r="3" fill="#fff" />
                </svg>
            </div>
        )}
        <div className="p-5 sm:p-6">
            <h3 className="text-lg font-medium text-[#123c3a]">{member.name}</h3>
            <p className="mt-2 text-xs leading-5 text-gray-500">{member.role}</p>
            <p className="mt-3 text-xs leading-5 text-gray-500">{member.description}</p>
        </div>
    </article>
);

const TeamSection = () => (
    <section className="w-full bg-[#f7f8f5]">
        <div className="mx-auto max-w-350 px-6 py-16 lg:px-10 lg:py-20 xl:px-14">
            <div className="mb-10 max-w-2xl">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                    The People Behind CPC
                </p>
                <h2 className="text-4xl font-medium leading-[1.08] text-[#123c3a] md:text-5xl">
                    Meet Our Team
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-0.5">
                {leadership.map((member) => (
                    <div key={member.name} className="mx-auto w-full max-w-110">
                        <TeamCard member={member} />
                    </div>
                ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-6">
                {teamMembers.map((member) => (
                    <TeamCard key={member.name} member={member} />
                ))}
            </div>
        </div>
    </section>
);

export default TeamSection;