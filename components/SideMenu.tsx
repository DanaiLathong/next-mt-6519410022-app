"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaLayerGroup,
  FaBars,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const menus = [
  { icon: <FaHome />, path: "/" },
  { icon: <FaUser />, path: "/aboutme" },
  { icon: <FaLayerGroup />, path: "/eduexp" },
  { icon: <FaBars />, path: "/spec" },
  { icon: <FaBriefcase />, path: "/projects" },
  { icon: <FaProjectDiagram />, path: "/skills" },
  { icon: <FaEnvelope />, path: "/contactme" },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <div className="fixed right-[60px] top-1/2 -translate-y-1/2 bg-black border border-gray-600 rounded-full px-5 py-9 flex flex-col gap-7">
      {menus.map((menu, i) => (
        <Link
          key={i}
          href={menu.path}
          className={`text-[26px] transition ${
            pathname === menu.path
              ? "text-orange-500"
              : "text-[#9a9a9f] hover:text-[#ff6a00]"
          }`}
        >
          {menu.icon}
        </Link>
      ))}
    </div>
  );
}