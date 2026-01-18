import "../styles/index.css";

export default function Resume() {
    return (
        <section id="resume" className="h-400 scroll-mt-15">
            <div className="m-auto max-w-250 items-center justify-center px-7 py-10">
                <h1 className="mb-10 text-center text-3xl font-bold">Resume</h1>
                <div className="flex flex-wrap gap-10">
                    <div className="bg-primary border-neutral rounded-2xl border p-10">
                        <h2 className="text-base font-bold">EDUCATION</h2>
                        <h3 className="text-sm font-bold">Bachelor of Computer Science, Software Engineering</h3>
                        <p className="text-sm font-light italic">Carleton University (2021 - 2025)</p>
                        <ul className="list-inside list-disc text-xs">
                            <li>Minor in Japanese</li>
                            <li>President's Scholarship</li>
                            <li>Phil Boland Memorial Scholarship</li>
                        </ul>
                    </div>

                    <div className="bg-primary border-neutral rounded-2xl border p-10">
                        <h2 className="text-base font-bold">SKILLS</h2>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3 className="text-sm font-bold">Frameworks / Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    <div>ReactJS</div>
                                    <div>Tailwind CSS</div>
                                    <div>NodeJS</div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    <div>Java</div>
                                    <div>C/C++</div>
                                    <div>Python</div>
                                    <div>JavaScript</div>
                                    <div>TypeScript</div>
                                    <div>HTML/CSS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
