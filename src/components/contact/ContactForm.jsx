import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="bg-[#f8f8f3] px-6 py-20 lg:px-16 lg:py-15">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#b79538]">
            Your next chapter
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#123f42] md:text-5xl">
            Tell us about
            <br />
            your project.
          </h2>

          <p className="mt-6 max-w-sm leading-7 text-[#577071]">
            Whether you need master planning, architectural design,
            infrastructure or approvals support, our team is ready to listen.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Name */}
          <label className="border-b border-[#123f42]/25 pb-3 text-sm text-[#577071]">
            Your name

            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="mt-3 block w-full bg-transparent text-lg text-[#123f42] outline-none placeholder:text-[#577071]/60"
            />
          </label>

          {/* Email */}
          <label className="border-b border-[#123f42]/25 pb-3 text-sm text-[#577071]">
            Email address

            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="mt-3 block w-full bg-transparent text-lg text-[#123f42] outline-none placeholder:text-[#577071]/60"
            />
          </label>

          {/* Message */}
          <label className="border-b border-[#123f42]/25 pb-3 text-sm text-[#577071] md:col-span-2">
            What can we help with?

            <textarea
              name="message"
              required
              rows="3"
              placeholder="Tell us about your planning or development need"
              className="mt-3 block w-full resize-none bg-transparent text-lg text-[#123f42] outline-none placeholder:text-[#577071]/60"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#073f42] px-6 py-3.5 text-sm text-white transition duration-300 hover:bg-[#0b5558]"
          >
            Send enquiry
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}