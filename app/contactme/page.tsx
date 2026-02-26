export default function Contact() {
  return (
    <>
      {/* Title */}
      <h1 className="text-[40px] font-semibold tracking-wide">
        Contact{" "}
        <span className="text-[#ff6a00]">
          Me
        </span>
      </h1>

      <p className="mt-3 text-[16px] text-[#b5b5b5]">
        Let’s get in touch!
      </p>

      {/* Form */}
      <form className="mt-12 max-w-[760px]">

        <div className="grid grid-cols-2 gap-12">

          <InputField label="Email" />
          <InputField label="Phone" />
          <InputField label="Name" />
          <InputField label="Adress" />

        </div>

        {/* Content */}
        <div className="mt-12">
          <InputField label="Content" full />
        </div>

        {/* Checkbox */}
        <div className="mt-10 flex items-center gap-3">
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#ff6a00]"
          />
          <p className="text-[13px] text-[#9a9a9f]">
            I would like to receive the newsletter.
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-10 bg-[#ff6a00] text-black px-12 py-3 rounded-[8px] text-[15px] font-medium hover:opacity-90 transition"
        >
          Submit
        </button>

      </form>
    </>
  );
}

function InputField({
  label,
  full = false,
}: {
  label: string;
  full?: boolean;
}) {
  return (
    <div
      className={`
        ${full ? "col-span-2" : ""} 
        flex flex-col 
        ${full ? "gap-4" : "gap-0"}
      `}
    >
      <label
        className={`
          text-[#ff6a00] text-[14px]
          ${full ? "" : "leading-none"}
        `}
      >
        {label}
      </label>

      <input
        type="text"
        className={`
          w-full
          bg-transparent
          border-b border-[#3a3a3f]
          focus:outline-none
          focus:border-[#ff6a00]
          text-[15px]
          ${full ? "pt-2 pb-4" : "pt-0 pb-0"}
        `}
      />
    </div>
  );
}