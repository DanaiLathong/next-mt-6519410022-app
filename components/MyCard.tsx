"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGoogle,
  FaGithub 
} from "react-icons/fa";

import Profile from "@/assets/images/danai.png";

export default function MyCard() {
  return (
    <div className="w-[320px] bg-black border border-[#2a2a2e] rounded-[20px] p-6 shadow-xl">
      
      <h2 className="text-[25px] tracking-wide text-white mb-1">
        <span className="text-[#ff6a00]">D</span>anai
      </h2>

      <div className="rounded-[16px] overflow-hidden">
        <Image
          src={Profile}
          alt="profile"
          width={280}
          height={280}
        />
      </div>

      <p className="mt-1 text-[18px] text-[#cfcfd4] text-center">
        STU ID: 6519410022
      </p>

      <p className="text-[13px] text-[#9a9a9f] text-center">
        Fullstack Web Developer
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-[26px] text-[#d4d4d8]">
        
        <a
          href="https://www.facebook.com/bank.danai12"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://github.com/DanaiLathong"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/bbeightxup__/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:danai.lathong@email.com"
          className="hover:text-[#ff6a00] transition"
        >
          <FaGoogle />
        </a>

      </div>

      <Link
  href="/contactme"
  className="mt-10 w-full bg-[#ff6a00] hover:bg-[#ff7a1a] transition rounded-[12px] py-3 text-black font-semibold tracking-wider text-center block"
>
  HIRE ME !
</Link>
    </div>
  );
}