import "../styles/index.css";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const textCycleList = ["Developer", "Photographer", "Gamer", "CS Graduate"];
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
        <section id="hero" className="flex h-screen flex-col items-center justify-center">
            <span className="text-accent text-3xl font-medium">Hello, I'm</span>
            <span className="mt-1 mb-6 text-7xl font-bold">Jeremy</span>
            <span id="text-cycle" className="text-accent text-3xl font-medium">
                <span id="text-cycle-text">{text}</span>
                <span id="text-cycle-blinker" className="inline-block w-[1ch]">
                    {blinker ? "\u00A0|" : ""}
                </span>
            </span>
            <span className="bg-accent hover:text-accent hover:bg-primary my-10 rounded-3xl px-4 py-1 text-2xl font-medium transition-colors">
                <a href="#about">Learn More</a>
            </span>
        </section>
    );
}
