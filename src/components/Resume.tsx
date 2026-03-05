import "../styles/index.css";

import JSIcon from "../assets/icons/js-icon.svg?react";
import TSIcon from "../assets/icons/ts-icon.svg?react";
import TailwindIcon from "../assets/icons/tailwind-icon.svg?react";
import JavaIcon from "../assets/icons/java-icon.svg?react";
import ReactJSIcon from "../assets/icons/reactjs-icon.svg?react";
import CIcon from "../assets/icons/c-icon.svg?react";
import CPPIcon from "../assets/icons/cpp-icon.svg?react";
import PythonIcon from "../assets/icons/python-icon.svg?react";
import HTMLIcon from "../assets/icons/html-icon.svg?react";
import CSSIcon from "../assets/icons/css-icon.svg?react";
import type { ReactElement } from "react";
import React from "react";

function SkillEntry({ title, children }: { title: string; children: ReactElement }) {
    const styledChild = React.cloneElement(children as ReactElement<{ className?: string }>, { className: "h-5 w-5" });

    return (
        <div className="bg-bg-secondary hover:bg-text-secondary flex items-center justify-center gap-2 rounded-xl border px-5 py-2 transition-colors duration-300">
            {styledChild}
            <p>{title}</p>
        </div>
    );
}

export default function Resume() {
    return (
        <section id="resume" className="bg-bg-secondary scroll-mt-15">
            <div className="m-auto max-w-250 items-center justify-center px-7 py-10">
                <h1 className="text-text-primary mb-10 text-center text-3xl font-bold">Resume</h1>
                <div className="flex flex-col gap-10">
                    <div className="text-text-primary bg-bg-primary border-text-secondary rounded-2xl p-10">
                        <h2 className="text-xl font-bold">EDUCATION</h2>
                        <h3 className="text-md font-bold">Bachelor of Computer Science, Software Engineering</h3>
                        <p className="text-sm font-light italic">Carleton University (2021 - 2025)</p>
                        <ul className="list-inside list-disc text-sm">
                            <li>Minor in Japanese</li>
                            <li>President's Scholarship</li>
                            <li>Phil Boland Memorial Scholarship</li>
                        </ul>
                    </div>

                    <div className="text-text-primary bg-bg-primary border-text-secondary rounded-2xl p-10">
                        <h2 className="text-xl font-bold">SKILLS</h2>
                        <div className="flex flex-col">
                            <div>
                                <h3 className="text-lg font-bold">Frameworks / Libraries</h3>
                                <div className="flex flex-wrap gap-5 py-3">
                                    <SkillEntry title="ReactJS">
                                        <ReactJSIcon />
                                    </SkillEntry>
                                    <SkillEntry title="Tailwind">
                                        <TailwindIcon />
                                    </SkillEntry>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Languages</h3>
                                <div className="flex flex-wrap gap-5 py-3">
                                    <SkillEntry title="JavaScript">
                                        <JSIcon />
                                    </SkillEntry>
                                    <SkillEntry title="TypeScript">
                                        <TSIcon />
                                    </SkillEntry>
                                    <SkillEntry title="Java">
                                        <JavaIcon />
                                    </SkillEntry>
                                    <SkillEntry title="C">
                                        <CIcon />
                                    </SkillEntry>
                                    <SkillEntry title="C++">
                                        <CPPIcon />
                                    </SkillEntry>
                                    <SkillEntry title="Python">
                                        <PythonIcon />
                                    </SkillEntry>
                                    <SkillEntry title="HTML">
                                        <HTMLIcon />
                                    </SkillEntry>
                                    <SkillEntry title="CSS">
                                        <CSSIcon />
                                    </SkillEntry>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
