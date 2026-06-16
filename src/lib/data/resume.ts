import { type ResumeData } from "@/lib/types/resume";

import JSIcon from "@/assets/icons/js-icon.svg?react";
import TSIcon from "@/assets/icons/ts-icon.svg?react";
import TailwindIcon from "@/assets/icons/tailwind-icon.svg?react";
import JavaIcon from "@/assets/icons/java-icon.svg?react";
import ReactJSIcon from "@/assets/icons/reactjs-icon.svg?react";
import CIcon from "@/assets/icons/c-icon.svg?react";
import CPPIcon from "@/assets/icons/cpp-icon.svg?react";
import PythonIcon from "@/assets/icons/python-icon.svg?react";
import HTMLIcon from "@/assets/icons/html-icon.svg?react";
import CSSIcon from "@/assets/icons/css-icon.svg?react";
import NextJSIcon from "@/assets/icons/nextjs-icon.svg?react";

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
