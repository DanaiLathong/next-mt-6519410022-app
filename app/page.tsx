export default function Home() {
  return (
    <>
      <p className="text-[28px] font-light tracking-wide">
        Lets Work{" "}
        <span className="text-[#ff6a00] font-normal">
          Together !
        </span>
      </p>

      <h1 className="mt-6 text-[48px] leading-[60px] font-semibold">
        Hi From{" "}
        <span className="text-[#ff6a00]">
          Danai
        </span>{" "}
        ,<br />
        Interactive Designer & Fullstack
        <br />
        Web Developer
      </h1>

      <p className="mt-6 text-[15px] leading-[26px] text-[#9a9a9f] max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iusto maxime tempora at neque a adipisci nulla voluptatem?
        Mollitia, officiis, architecto earum voluptates obcaecati
        corrupti voluptatem.
      </p>

      <div className="flex gap-[100px] mt-10">
        <div>
          <h2 className="text-[45px] text-[#ff6a00] ">
            3+
          </h2>
          <p className="text-[14px] text-[#9a9a9f]">
            Years of <br />Experience
          </p>
        </div>

        <div>
          <h2 className="text-[45px] text-[#ff6a00] ">
            10+
          </h2>
          <p className="text-[14px] text-[#9a9a9f]">
            Projects <br />Completed
          </p>
        </div>
      </div>
    </>
  );
}