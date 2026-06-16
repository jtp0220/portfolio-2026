import Section from "@/components/core/Section";

export default function About() {
  return (
    <Section id="about" className="bg-bg-primary md:scroll-mt-15">
      <div className="m-auto flex max-w-250 flex-col items-center justify-center">
        <h1 className="text-text-primary mb-10 text-3xl font-bold">About</h1>
        <div className="space-y-5 text-xl font-light">
          <p className="text-text-primary text-xl">Hey, Thanks for stopping by! I'm a recent Computer Science graduate excited to begin my professional journey in software development.</p>
          <p className="text-text-primary/70 text-lg">Most of my hands-on experience has been in web development, where I've explored modern technologies and built small projects to strengthen my understanding through experimentation and practice. As an early-career developer, I bring curiosity, adaptability, and a strong willingness to learn. I'm eager to grow alongside a team in a professional environment, contribute meaningfully, and continue developing my technical skills.</p>
        </div>
      </div>
    </Section>
  );
}
