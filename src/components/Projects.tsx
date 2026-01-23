import "../styles/index.css";
import LinkIcon from "../assets/link-icon.svg?react";

function Project({ title, description, url }: { title: string; description: string; url: string }) {
    return (
        <div className="bg-bg-secondary hover:bg-bg-tertiary flex max-w-100 flex-row rounded-2xl p-4">
            <a href={url} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <LinkIcon className="text-text-primary h-6 w-auto" />
                </div>
                <p>{description}</p>
            </a>
            <div></div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="text-text-primary bg-bg-primary scroll-mt-15">
            <div className="m-auto flex max-w-250 flex-col items-center justify-center px-7 py-10">
                <h1 className="text-text-primary mb-10 text-3xl font-bold">Projects</h1>
                <div className="flex flex-wrap justify-center gap-10">
                    <Project title="Kantan" description="A lightweight webapp built for Japanese learners. Paste any Japanese text into the box and the app will auto-extract any Chinese characters." url="https://kantan.ca" />
                    <Project title="Kevin Tran Portfolio" description="Online portfolio of Kevin Tran, a piano performance student from Western University, showcasing classical and jazz performances alongside teaching services." url="https://kevintranpiano.ca" />
                </div>
            </div>
        </section>
    );
}
