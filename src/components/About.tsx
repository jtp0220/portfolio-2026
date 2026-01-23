import "../styles/index.css";

export default function About() {
    return (
        <section id="about" className="bg-bg-primary scroll-mt-15">
            <div className="m-auto flex max-w-250 flex-col items-center justify-center px-7 py-10">
                <h1 className="text-text-primary mb-10 text-3xl font-bold">About</h1>
                <div className="space-y-5 text-xl font-light">
                    <p className="text-text-primary text-xl">Hey! Thanks for stopping by. I'm a recent Computer Science graduate, passionate about web development and building things that are both functional and fun.</p>
                    <p className="text-text-primary/70 text-lg">I enjoy exploring new technologies, tinkering with projects, and learning through doing. Outside of coding, I enjoy photography, and diving into Japanese language and culture. While most of my experience is in web development, I'm always curious to try new things and expand my skills.</p>
                </div>
            </div>
        </section>
    );
}
