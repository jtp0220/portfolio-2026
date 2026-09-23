import { useEffect, useRef, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

import { navigateToSection } from "@/lib/navigation";

const textCycleList = ["Developer", "Photographer", "Gamer", "CS Graduate"];

export default function Hero() {
  const [text, setText] = useState("");
  const [blinker, setBlinker] = useState(true);
  const textIndexRef = useRef(0);

  useEffect(() => {
    let isMounted = true;

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    async function typeText(word: string) {
      if (!isMounted) return;
      setText("");
      for (const char of word) {
        if (!isMounted) return;
        setText((prev) => prev + char);
        await delay(100);
      }

      await delay(2000);

      let current = word;
      while (current.length > 0 && isMounted) {
        current = current.slice(0, -1);
        setText(current);
        await delay(100);
      }
    }

    async function cycleWords() {
      while (isMounted) {
        const currentWord = textCycleList[textIndexRef.current];
        await typeText(currentWord);
        textIndexRef.current = (textIndexRef.current + 1) % textCycleList.length;
      }
    }

    cycleWords();

    const blinkerInterval = setInterval(() => {
      setBlinker((prev) => !prev);
    }, 500);

    return () => {
      isMounted = false;
      clearInterval(blinkerInterval);
    };
  }, []);

  return (
    <section id="hero" className="hero-surface relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 md:px-10">
      <div className="relative mx-auto w-full max-w-6xl text-center md:text-left">
        <div className="reveal">
          <p className="text-text-secondary text-xl font-medium md:text-2xl">Hello, I'm</p>
          <h1 className="text-text-primary mx-auto mt-4 max-w-4xl text-[clamp(4rem,11vw,9rem)] leading-[0.82] font-semibold tracking-[-0.09em] md:mx-0">
            Jeremy
            <br />
            <span className="text-accent">Tran Perez</span>
          </h1>
          <span id="text-cycle" className="text-text-secondary mt-10 block font-mono text-lg md:text-xl">
            <span id="text-cycle-text">{text}</span>
            <span id="text-cycle-blinker" className="inline-block w-[1ch]">
              {blinker ? "\u00A0|" : ""}
            </span>
          </span>
          <a href="#about" onClick={(event) => navigateToSection(event, "#about")} className="bg-accent text-bg-primary hover:bg-accent-soft mt-10 inline-flex items-center gap-3 rounded-lg px-6 py-3 text-sm font-semibold transition-colors">
            <span>Learn more</span>
            <FaArrowDownLong aria-hidden="true" className="text-base" />
          </a>
        </div>
      </div>
    </section>
  );
}
