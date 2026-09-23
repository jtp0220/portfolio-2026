import Section from "@/components/core/Section";

export default function About() {
  return (
    <Section id="about" className="bg-bg-primary">
      <div className="grid w-full gap-12 md:grid-cols-[0.7fr_1fr] md:items-start">
        <h1 className="display-heading text-text-primary text-6xl md:sticky md:top-28 md:text-8xl">
          A little
          <br />
          <span className="text-accent">about me.</span>
        </h1>
        <div className="border-line max-w-3xl space-y-6 border-l pl-6 text-xl leading-relaxed md:mt-16 md:pl-10">
          <p className="text-text-primary">Hey, thanks for stopping by. I'm a recent Computer Science graduate excited to begin my professional journey in software development.</p>
          <p className="text-text-secondary text-lg">Most of my hands-on experience has been in web development, where I've explored modern technologies and built small projects to strengthen my understanding through experimentation and practice. As an early-career developer, I bring curiosity, adaptability, and a strong willingness to learn.</p>
        </div>
      </div>
    </Section>
  );
}
