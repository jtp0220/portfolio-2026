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
        <section id="hero" className="bg-bg-secondary flex h-screen flex-col items-center justify-center">
            <span className="text-text-secondary text-3xl font-medium">Hello, I'm</span>
            <span className="text-text-primary mt-6 mb-6 text-center text-7xl font-bold">Jeremy Tran Perez</span>
            <span id="text-cycle" className="text-text-secondary text-3xl font-medium">
                <span id="text-cycle-text">{text}</span>
                <span id="text-cycle-blinker" className="inline-block w-[1ch]">
                    {blinker ? "\u00A0|" : ""}
                </span>
            </span>
            <span className="text-text-primary bg-bg-tertiary hover:bg-bg-primary border-text-secondary my-10 rounded-xl border px-8 py-4 text-xl font-medium transition-colors">
                <a href="#about">Learn More</a>
            </span>
        </section>
    );
}
