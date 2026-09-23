import { type ResumeData } from "@/lib/types/resume";

import { FaJava } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiC, SiCplusplus, SiCloudflare, SiJavascript, SiNextdotjs, SiPayloadcms, SiPython, SiReact, SiResend, SiTailwindcss, SiTypescript } from "react-icons/si";

export const resumeData: ResumeData = {
  program: "Bachelor of Computer Science, Software Engineering",
  school: "Carleton University",
  period: "2021-2025",
  other: ["Minor in Japanese", "President's Scholarship", "Phil Boland Memorial Scholarship"],
  skills: [
    {
      title: "ReactJS",
      icon: SiReact,
      type: "framework/library",
      color: "#61dafb",
    },
    {
      title: "Tailwind",
      icon: SiTailwindcss,
      type: "framework/library",
      color: "#06b6d4",
    },
    {
      title: "NextJS",
      icon: SiNextdotjs,
      type: "framework/library",
      color: "#ffffff",
    },
    {
      title: "Payload",
      icon: SiPayloadcms,
      type: "framework/library",
    },
    {
      title: "Cloudflare",
      icon: SiCloudflare,
      type: "framework/library",
      color: "#f38020",
    },
    {
      title: "Resend",
      icon: SiResend,
      type: "framework/library",
      color: "#f6f6f6",
    },
    {
      title: "JavaScript",
      icon: SiJavascript,
      type: "language",
      color: "#f7df1e",
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
      type: "language",
      color: "#3178c6",
    },
    {
      title: "Java",
      icon: FaJava,
      type: "language",
      color: "#ed8b00",
    },
    {
      title: "C",
      icon: SiC,
      type: "language",
      color: "#a8b9cc",
    },
    {
      title: "C++",
      icon: SiCplusplus,
      type: "language",
      color: "#00599c",
    },
    {
      title: "Python",
      icon: SiPython,
      type: "language",
      color: "#3776ab",
    },
    {
      title: "HTML",
      icon: FaHtml5,
      type: "language",
      color: "#e34f26",
    },
    {
      title: "CSS",
      icon: FaCss3Alt,
      type: "language",
      color: "#1572b6",
    },
  ],
};
