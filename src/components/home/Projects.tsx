import Section from "@/components/core/Section";
import { projectsData } from "@/lib/data/projects";
import { type ProjectData } from "@/lib/types/projects";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

function RepoThumbnail({ title, category }: { title: string; category: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-white/20 bg-black/10">
      <FaGithub className="text-text-primary size-20 opacity-90 md:size-28" aria-hidden="true" />
      <span className="text-text-primary/70 text-sm">{category} / source code</span>
      <span className="sr-only">GitHub repository for {title}</span>
    </div>
  );
}

function Project({ title, description, url, category, image, tone, reverse = false, featured = false }: ProjectData) {
  return (
    <article className="group border-line border-b py-12 first:border-t md:py-20">
      <a href={url} target="_blank" rel="noreferrer" className={`grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-14 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <div className={`project-visual ${tone} relative aspect-[16/10] overflow-hidden rounded-2xl ${image ? "p-3 md:p-5" : "p-8 md:p-12"}`}>
          {image ? (
            <div className="absolute inset-3 md:inset-5">
              <img className="block h-full w-full rounded-xl object-cover object-center transition duration-300 group-hover:scale-[1.03]" src={image} alt={`${title} project preview`} />
            </div>
          ) : (
            <RepoThumbnail title={title} category={category} />
          )}
          <span className="bg-bg-primary text-text-primary absolute top-5 left-5 px-3 py-1 text-xs font-medium md:top-8 md:left-8">{category}</span>
        </div>
        <div className="relative">
          <p className="text-accent mb-5 text-sm font-medium">{featured ? "Featured work" : "Project"}</p>
          <h3 className="display-heading text-text-primary group-hover:text-accent text-5xl transition-colors md:text-7xl">{title}</h3>
          <p className="text-text-secondary mt-6 max-w-md text-base leading-relaxed">{description}</p>
          <span className="text-text-primary mt-8 inline-flex items-center gap-4 text-sm font-medium">
            View project <FaArrowUpRightFromSquare className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="text-text-primary bg-bg-secondary">
      <div className="w-full">
        <div className="flex flex-col justify-between gap-8 pt-4 md:flex-row md:items-end">
          <h1 className="display-heading text-text-primary text-6xl md:text-8xl">
            Selected <span className="text-accent">work.</span>
          </h1>
          <p className="text-text-secondary max-w-xs text-base leading-relaxed">A few experiments, projects, and collaborations.</p>
        </div>
        <div className="mt-10">
          {projectsData.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
