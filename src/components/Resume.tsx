import "../styles/index.css";

import type { ReactElement } from "react";
import React from "react";

import type { SkillData } from "../constants";
import { resumeData } from "../constants";

function Skill(params: SkillData) {
  return (
    <div className="bg-bg-secondary hover:bg-text-secondary flex items-center justify-center gap-2 rounded-xl border px-5 py-2 transition-colors duration-300">
      <params.icon className="h-5 w-5" />
      <p>{params.title}</p>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="bg-bg-secondary md:scroll-mt-15">
      <div className="m-auto max-w-250 items-center justify-center px-7 py-10">
        <h1 className="text-text-primary mb-10 text-center text-3xl font-bold">Resume</h1>
        <div className="flex flex-col gap-10">
          <div className="text-text-primary bg-bg-primary border-text-secondary rounded-2xl p-10">
            <h2 className="text-xl font-bold">EDUCATION</h2>
            <h3 className="text-md font-bold">{resumeData.program}</h3>
            <p className="text-sm font-light italic">
              {resumeData.school} ({resumeData.period})
            </p>
            <ul className="list-inside list-disc text-sm">
              {resumeData.other.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>

          <div className="text-text-primary bg-bg-primary border-text-secondary rounded-2xl p-10">
            <h2 className="text-xl font-bold">SKILLS</h2>
            <div className="flex flex-col">
              <div>
                <h3 className="text-lg font-bold">Frameworks / Libraries</h3>
                <div className="flex flex-wrap gap-5 py-3">{resumeData.skills.map((value: SkillData, index) => (value.type == "framework/library" ? <Skill key={index} {...value} /> : <></>))}</div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Languages</h3>
                <div className="flex flex-wrap gap-5 py-3">{resumeData.skills.map((value: SkillData, index) => (value.type == "language" ? <Skill key={index} {...value} /> : <></>))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
