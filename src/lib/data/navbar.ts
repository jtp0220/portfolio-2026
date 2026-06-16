import { type HeaderData as HeaderDataType } from "@/lib/types/navbar";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const HeaderData: HeaderDataType = {
  navTabs: [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Resume",
      href: "#resume",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Photography",
      href: "#photography",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  socialTabs: [
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/jeremytranperez",
    },
    {
      icon: FaGithub,
      href: "https://github.com/jtp0220",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/jeremytranperez",
    },
  ],
};
