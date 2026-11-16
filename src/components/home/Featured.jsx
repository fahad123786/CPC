const clients = [
  { name: "Pakistan Air Force", image: "/logos/Screenshot%202026-11-16%20222606.png" },
  { name: "Government of Punjab", image: "/logos/Screenshot%202026-11-16%20232532.png" },
  { name: "Lekki Aviation Town", image: "/logos/Screenshot%202026-11-16%20232637.png" },
  { name: "Lahore landmark", image: "/logos/Screenshot%202026-11-16%20232700.png" },
  { name: "Harmony", image: "/logos/Screenshot%202026-11-16%20232725.png" },
  { name: "DDA", image: "/logos/Screenshot%202026-11-16%20232901.png" },
  { name: "Fazaia Housing Scheme Lahore", image: "/logos/Screenshot%202026-11-16%20232938.png" },
  { name: "Paragon City", image: "/logos/Screenshot%202026-11-16%20233214.png" },
  { name: "Union Developers", image: "/logos/Screenshot%202026-11-16%20233244.png" },
  { name: "Etihad Town", image: "/logos/Screenshot%202026-11-16%20233306.png" },
  { name: "Lake City Lahore", image: "/logos/Screenshot%202026-11-16%20233325.png" },
  { name: "New Lahore City", image: "/logos/Screenshot%2020266.png" },
];

const Featured = () => {
  return (
    <section
      className="w-full bg-[#f7f7f4] px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="worthy-clients-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#123F42]">
            Our Clients
          </p>
          <h2
            id="worthy-clients-heading"
            className="font-serif text-3xl font-medium tracking-tight text-[#123F42] sm:text-4xl lg:text-[44px]"
          >
            Our Worthy Clients
          </h2>
        </div>

        <div className="client-marquee">
          <div className="client-marquee__track" aria-hidden="true">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "duplicate" : "original"}
                className={`client-marquee__group${isDuplicate ? " client-marquee__group--duplicate" : ""}`}
              >
                {clients.map((client) => (
                  <div className="client-marquee__item" key={client.name}>
                    <div className="flex h-32 items-center justify-center rounded-md border border-[#123F42]/10 bg-white p-5 sm:h-36">
                      <img
                        src={client.image}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <ul className="sr-only">
          {clients.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Featured;
