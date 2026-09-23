import hllanovationThumbnail from "@/assets/projects/HLLanovation-thumbnail.png";
import kantanThumbnail from "@/assets/projects/kantan-thumbnail.png";
import kevinTranPianoThumbnail from "@/assets/projects/kevintranpiano-thumbnail.png";
import { type ProjectData } from "@/lib/types/projects";

export const projectsData: ProjectData[] = [
  {
    title: "HLLanovation",
    category: "Web / Client",
    description: "A polished web presence for a landscaping and renovation business.",
    url: "https://hllanovation.ca",
    tone: "bg-[#8a392d]",
    image: hllanovationThumbnail,
  },

  {
    title: "Kevin Tran Piano",
    category: "Web / Collaboration",
    description: "An online portfolio for a piano performance student, bringing classical and jazz performances together with teaching services.",
    url: "https://kevintranpiano.ca",
    tone: "bg-[#49313e]",
    image: kevinTranPianoThumbnail,
    reverse: true,
  },
  {
    title: "Kantan",
    category: "Web app / Live",
    description: "A lightweight tool for Japanese learners that extracts kanji from any pasted text.",
    url: "https://kantan.ca",
    tone: "bg-[#b94738]",
    image: kantanThumbnail,
  },
  {
    title: "Portfolio",
    category: "Web / Personal",
    description: "A responsive portfolio built with React, showcasing projects, skills, and photography.",
    url: "https://github.com/jtp0220/portfolio-2026",
    tone: "bg-[#6d211f]",
    featured: true,
    reverse: true,
  },
  {
    title: "Fusician",
    category: "Experiment / Full-stack",
    description: "A full-stack website for discovering and listing musician services.",
    url: "https://github.com/jtp0220/fusician",
    tone: "bg-[#253d3b]",
  },
];
