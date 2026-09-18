import {
  Play,
  Users,
  Target,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { useRef, useState } from "react";

const AboutCP = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-[#f8f8f5] py-1 md:py-10 lg:py-1">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT VIDEO ================= */}
          <div className="relative overflow-hidden rounded-[10px]">

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-[#d9ddd5]">

              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="https://v1.pinimg.com/videos/mc/720p/d3/66/2b/d3662b395d2622f5dea47fb23c45c892.mp4"
                poster="/images/CPC Website.png"
                playsInline
                onEnded={() => setIsPlaying(false)}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Play Button */}
              <button
                type="button"
                onClick={toggleVideo}
                aria-label={isPlaying ? "Pause CPC story" : "Play CPC story"}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition duration-300 hover:scale-110">
                  {isPlaying ? <span className="h-5 w-1.5 rounded-sm bg-[#123f42]" /> : <Play size={20} fill="currentColor" className="ml-1 text-[#123f42]" />}
                </span>

                <span className="text-sm font-medium text-white drop-shadow-md">
                  {isPlaying ? "Pause Our Story" : "Watch Our Story"}
                </span>

                <span className="text-xs text-white/90">
                  2:15
                </span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="max-w-[590px]">

            {/* Small Heading */}
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6b716c]">
              About CPC
            </p>

            {/* Main Heading */}
            <h2 className="max-w-[560px] text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#123f42] sm:text-4xl lg:text-[46px]">

              {/* First Line */}
              <span className="block whitespace-nowrap">
                Your Partner in
              </span>

              {/* Second Line */}
              <span className="block">
                Planning &amp; Development
              </span>

            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[550px] text-[14px] leading-7 text-[#6c706c]">
              CPC is a leading urban planning, architecture and development
              consultancy in Pakistan, delivering sustainable and practical
              solutions for a rapidly evolving world. With a team of
              experienced professionals, we turn ideas into well-planned,
              efficient and future-ready spaces.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-3">

              {/* Feature 01 */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8ece8]">
                  <Users
                    size={25}
                    strokeWidth={2.5}
                    className="text-[#123f42]"
                  />
                </div>

                <div>
                  <h3 className="text-[13px] font-bold leading-5 text-[#123f42]">
                    Experienced Team
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-[#777b77]">
                    Skilled professionals with proven expertise.
                  </p>
                </div>

              </div>

              {/* Feature 02 */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8ece8]">
                  <Target
                    size={25}
                    strokeWidth={2.5}
                    className="text-[#123f42]"
                  />
                </div>

                <div>
                  <h3 className="text-[13px] font-bold leading-5 text-[#123f42]">
                    Client Focused
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-[#777b77]">
                    Your vision, our commitment.
                  </p>
                </div>

              </div>

              {/* Feature 03 */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8ece8]">
                  <Leaf
                    size={25}
                    strokeWidth={2.5}
                    className="text-[#123f42]"
                  />
                </div>

                <div>
                  <h3 className="text-[13px] font-bold leading-5 text-[#123f42]">
                    Sustainable Solutions
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-[#777b77]">
                    For a better future.
                  </p>
                </div>

              </div>

            </div>

            {/* ================= BUTTON ================= */}
            <div className="mt-9">
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-full bg-[#123f42] px-6 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#0d3032]"
              >
                Learn More About Us

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={12} />
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCP;