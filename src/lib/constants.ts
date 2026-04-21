import LinkedinIcon from "/src/assets/icons/linkedin-icon.svg?react";
import GithubIcon from "/src/assets/icons/github-icon.svg?react";
import InstagramIcon from "/src/assets/icons/instagram-icon.svg?react";

import JSIcon from "/src/assets/icons/js-icon.svg?react";
import TSIcon from "/src/assets/icons/ts-icon.svg?react";
import TailwindIcon from "/src/assets/icons/tailwind-icon.svg?react";
import JavaIcon from "/src/assets/icons/java-icon.svg?react";
import ReactJSIcon from "/src/assets/icons/reactjs-icon.svg?react";
import CIcon from "/src/assets/icons/c-icon.svg?react";
import CPPIcon from "/src/assets/icons/cpp-icon.svg?react";
import PythonIcon from "/src/assets/icons/python-icon.svg?react";
import HTMLIcon from "/src/assets/icons/html-icon.svg?react";
import CSSIcon from "/src/assets/icons/css-icon.svg?react";
import NextJSIcon from "/src/assets/icons/nextjs-icon.svg?react";

type NavTabData = {
  label: string;
  href: string;
};

export type SocialTabData = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
};

type HeaderData = {
  navTabs: NavTabData[];
  socialTabs: SocialTabData[];
};

export const HeaderData: HeaderData = {
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
    {
      label: "Blog",
      href: "/blog",
    },
  ],

  socialTabs: [
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/jeremytranperez",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/jtp0220",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com/jeremytranperez",
    },
  ],
};

// ------------------------------------------------------------------------------ //

export type SkillData = {
  title: string;
  type: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export type ResumeData = {
  program: string;
  school: string;
  period: string;
  other: string[];
  skills: SkillData[];
};

export const resumeData: ResumeData = {
  program: "Bachelor of Computer Science, Software Engineering",
  school: "Carleton University",
  period: "2021-2025",
  other: ["Minor in Japanese", "President's Scholarship", "Phil Boland Memorial Scholarship"],
  skills: [
    {
      title: "ReactJS",
      icon: ReactJSIcon,
      type: "framework/library",
    },
    {
      title: "Tailwind",
      icon: TailwindIcon,
      type: "framework/library",
    },
    {
      title: "NextJS",
      icon: NextJSIcon,
      type: "framework/library",
    },
    {
      title: "JavaScript",
      icon: JSIcon,
      type: "language",
    },
    {
      title: "TypeScript",
      icon: TSIcon,
      type: "language",
    },
    {
      title: "Java",
      icon: JavaIcon,
      type: "language",
    },
    {
      title: "C",
      icon: CIcon,
      type: "language",
    },
    {
      title: "C++",
      icon: CPPIcon,
      type: "language",
    },
    {
      title: "Python",
      icon: PythonIcon,
      type: "language",
    },
    {
      title: "HTML",
      icon: HTMLIcon,
      type: "language",
    },
    {
      title: "CSS",
      icon: CSSIcon,
      type: "language",
    },
  ],
};
