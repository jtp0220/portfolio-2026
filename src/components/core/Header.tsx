import { useState } from "react";

import { HeaderData } from "@/lib/data/navbar";
import { navigateToSection } from "@/lib/navigation";
import { type SocialTabData } from "@/lib/types/navbar";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Sandwich open={open} setOpen={() => setOpen(!open)} />
      <Navbar open={open} setOpen={() => setOpen(false)} />
    </header>
  );
}

interface headerState {
  open: boolean;
  setOpen: () => void;
}

function Sandwich(params: headerState) {
  return (
    <button aria-label="Toggle navigation" className="bg-bg-secondary border-line fixed top-4 right-4 z-20 flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-xl border md:hidden" onClick={params.setOpen}>
      <div className={`h-0.5 w-5 rounded bg-white duration-300 ease-in-out ${params.open ? "translate-y-1.5 rotate-45" : ""}`}></div>
      <div className={`h-0.5 w-5 rounded bg-white duration-300 ease-in-out ${params.open ? "scale-0" : ""}`}></div>
      <div className={`h-0.5 w-5 rounded bg-white duration-300 ease-in-out ${params.open ? "-translate-y-1.5 -rotate-45" : ""}`}></div>
    </button>
  );
}

function Navbar(params: headerState) {
  return (
    <nav aria-label="Primary navigation">
      <div className={`${params.open ? "" : "translate-x-full"} bg-bg-primary/95 border-line fixed top-0 right-0 z-10 flex h-full w-full max-w-80 flex-col items-center space-y-5 border-l pt-24 backdrop-blur-xl transition-transform duration-300 ease-in-out md:top-4 md:right-1/2 md:h-14 md:w-[calc(100%_-_2rem)] md:max-w-5xl md:translate-x-1/2 md:flex-row md:justify-between md:space-y-0 md:rounded-2xl md:border md:px-5 md:pt-0 md:transition-none`}>
        <a href="#hero" onClick={(event) => navigateToSection(event, "#hero")} className="text-text-primary hidden text-lg font-semibold tracking-tight md:block">
          JTP<span className="text-accent">.</span>
        </a>
        <ul className="flex w-full flex-col items-center justify-center md:w-auto md:flex-row md:space-x-1">
          {HeaderData.navTabs.map((item, index) => (
            <NavTab key={index} {...item} setOpen={params.setOpen} />
          ))}
        </ul>
        <ul className="flex items-center justify-center space-x-1">
          {HeaderData.socialTabs.map((value: SocialTabData, index) => {
            return <SocialTabData key={index} {...value} />;
          })}
        </ul>
        <div>
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
}

function NavTab({ label, href, setOpen }: { label: string; href: string; setOpen: () => void }) {
  return (
    <li className="text-text-secondary hover:text-text-primary w-full px-3 py-4 text-center text-sm transition-colors md:w-auto md:py-1">
      <a
        href={href}
        onClick={(event) => {
          navigateToSection(event, href);
          setOpen();
        }}
      >
        {label}
      </a>
    </li>
  );
}

function SocialTabData(params: SocialTabData) {
  return (
    <li className="text-text-secondary hover:text-accent flex h-9 w-9 items-center justify-center p-2 transition-colors">
      <a href={params.href}>
        <params.icon size={23} />
      </a>
    </li>
  );
}
