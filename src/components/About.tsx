import "../styles/index.css";

export default function About() {
    return (
        <section id="about" className="bg-primary scroll-mt-15">
            <div className="m-auto flex max-w-250 flex-col items-center justify-center px-7 py-10">
                <h1 className="mb-10 text-3xl font-bold underline underline-offset-4">ABOUT ME</h1>
                <div>
                    <p className="text-xl font-light">Thanks for stopping by. I'm a recent Computer Science graduate from Carleton University. I've always been curious about how things work - the inner mechanisms - and drawn to the process of creating. Over time, my interested have ranged from architecture to mechanical design, and ultimately to computer science, where I believe my strong fascination with technology and building things truly align.</p>
                </div>
            </div>
        </section>
    );
}
