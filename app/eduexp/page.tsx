export default function EduExp() {
  return (
    <>
      {/* Title */}
      <h1 className="text-[40px] font-semibold tracking-wide">
        Education &{" "}
        <span className="text-[#ff6a00]">
          Experience
        </span>
      </h1>

      <div className="mt-7 space-y-8 max-w-[720px] pl-7">

        {/* Experience */}
        <div>
          <p className="text-[#ff6a00] text-[16px] font-medium">
            2022 - Present
          </p>

          <p className="mt-2 text-[18px] font-semibold">
            UI/UX Designer
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Freelance
          </p>

          <p className="mt-3 text-[18px] font-semibold">
            Fullstack Web Developer
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Freelance
          </p>
        </div>

        {/* University */}
        <div>
          <p className="text-[#9a9a9f] text-[16px]">
            2022 - 2025
          </p>

          <p className="mt-2 text-[18px] font-semibold">
            Bachelor Degree in Computer Engineering
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Southeast Asia University
          </p>
        </div>

        {/* High School */}
        <div>
          <p className="text-[#9a9a9f] text-[16px]">
            2019 - 2022
          </p>

          <p className="mt-2 text-[18px] font-semibold">
            High school
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Phetkasem Management Technological College
          </p>
        </div>

      </div>
    </>
  );
}