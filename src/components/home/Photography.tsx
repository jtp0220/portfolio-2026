import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

import Section from "@/components/core/Section";

const images = Object.values(import.meta.glob<string>("@/assets/gallery/*.{jpg,JPG}", { eager: true, query: "?url", import: "default" }));

function PhotoFrame({ src, index, onSelect }: { src: string; index: number; onSelect: (index: number) => void }) {
  return (
    <button type="button" onClick={() => onSelect(index)} className="group bg-bg-tertiary relative aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-xl text-left" aria-label={`Enlarge photograph ${index + 1}`}>
      <img className="h-full w-full object-cover grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0" src={src} alt="" onContextMenu={(e) => e.preventDefault()} />
      <span className="bg-bg-primary/90 text-text-primary absolute right-3 bottom-3 rounded-md px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">View full size</span>
    </button>
  );
}

export default function Photography() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") setSelectedIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
      if (event.key === "ArrowRight") setSelectedIndex((current) => (current === null ? 0 : (current + 1) % images.length));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <Section id="photography" className="bg-bg-primary text-text-primary">
      <div className="w-full">
        <div className="section-rule flex flex-col justify-between gap-8 pt-8 text-center md:flex-row md:text-left">
          <div className="w-full">
            <p className="text-accent text-sm font-medium">Through the lens</p>
            <h1 className="display-heading text-text-primary mt-3 text-6xl md:text-8xl">
              Frames from
              <br />
              <span className="text-accent">everywhere.</span>
            </h1>
          </div>
          <p className="text-text-secondary mx-auto max-w-sm text-base leading-relaxed md:mx-0 md:max-w-xs md:pt-2">A growing collection of quiet moments, big landscapes, and the details in between.</p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {images.map((src, index) => (
            <PhotoFrame key={index} src={src} index={index} onSelect={setSelectedIndex} />
          ))}
        </div>
      </div>
      {selectedIndex !== null && (
        <div className="bg-bg-primary/95 fixed inset-0 z-50 flex items-center justify-center p-5 backdrop-blur-md md:p-10" role="dialog" aria-modal="true" aria-label="Expanded photograph">
          <button type="button" onClick={() => setSelectedIndex(null)} className="bg-bg-secondary text-text-primary hover:bg-accent absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full transition-colors" aria-label="Close photograph">
            <FaXmark />
          </button>
          <div className="relative flex max-h-full max-w-full flex-col items-center gap-6 px-14 pt-8 pb-4 md:px-24 md:pt-10 md:pb-5">
            <button type="button" onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)} className="bg-bg-secondary text-text-primary hover:bg-accent absolute top-1/2 left-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-colors" aria-label="Previous photograph">
              <FaChevronLeft />
            </button>
            <img className="max-h-[calc(100vh-11rem)] max-w-[calc(100vw-10rem)] rounded-lg object-contain" src={images[selectedIndex]} alt={`Expanded photograph ${selectedIndex + 1}`} />
            <button type="button" onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)} className="bg-bg-secondary text-text-primary hover:bg-accent absolute top-1/2 right-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-colors" aria-label="Next photograph">
              <FaChevronRight />
            </button>
            <a href={images[selectedIndex]} download className="bg-bg-secondary text-text-primary hover:bg-accent rounded-lg px-4 py-2 text-sm transition-colors">
              Download image
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}
