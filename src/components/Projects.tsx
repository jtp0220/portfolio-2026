import "../styles/index.css";
import LinkIcon from "../assets/link-icon.svg?react";

function Project() {
    return (
        <div>
            <div></div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="text-text-primary bg-bg-primary scroll-mt-15">
            <div className="m-auto flex max-w-250 flex-col items-center justify-center px-7 py-10">
                <h1 className="text-text-primary mb-10 text-3xl font-bold">Projects</h1>
                <div>
                    <div className="bg-bg-secondary hover:bg-bg-tertiary flex max-w-150 flex-row gap-5 rounded-2xl p-4">
                        <a href="https://kantan.ca">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold">Kantan</h2>
                                <LinkIcon className="text-text-primary h-6 w-6" />
                            </div>
                            <p className="">A lightweight webapp built for Japanese learners. Paste any Japanese text into the box and the app will auto-extract any Chinese characters.</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
