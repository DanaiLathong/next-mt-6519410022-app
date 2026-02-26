import { Code2, Globe, PenTool } from "lucide-react";

export default function Spec() {
  return (
    <>
      {/* Title */}
      <h1 className="text-[40px] font-semibold tracking-wide">
        My{" "}
        <span className="text-[#ff6a00]">
          Specializations
        </span>
      </h1>

      <div className="mt-5 space-y-8 max-w-[760px]">

        {/* Card 1 */}
        <div className="relative border border-[#ff6a00] rounded-[18px] p-8">
          <Code2
            size={22}
            className="absolute top-6 right-6 text-[#ff6a00]"
          />

          <h3 className="text-[18px] font-semibold">
            Front end-developer
          </h3>

          <p className="mt-3 text-[15px] leading-[24px] text-[#9a9a9f] max-w-[560px]">
            Front-end is where I weave code and creativity to shape
            captivating and user-centric digital experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative border border-[#ff6a00] rounded-[18px] p-8">
          <Globe
            size={22}
            className="absolute top-6 right-6 text-[#ff6a00]"
          />

          <h3 className="text-[18px] font-semibold">
            UI/UX Designer
          </h3>

          <p className="mt-3 text-[15px] leading-[24px] text-[#9a9a9f] max-w-[560px]">
            UI/UX design is my palette for blending art and user psychology
            into seamless and delightful interactions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative border border-[#ff6a00] rounded-[18px] p-8">
          <PenTool
            size={22}
            className="absolute top-6 right-6 text-[#ff6a00]"
          />

          <h3 className="text-[18px] font-semibold">
            Graphic designer
          </h3>

          <p className="mt-3 text-[15px] leading-[24px] text-[#9a9a9f] max-w-[560px]">
            As a graphic designer, I transform ideas into visually striking
            and impactful designs.
          </p>
        </div>

      </div>
    </>
  );
}