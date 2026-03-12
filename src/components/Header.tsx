import "../styles/index.css";

import { useState } from "react";

import { HeaderData, type SocialTabData } from "../constants";

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
    <button className="bg-bg-tertiary border-text-secondary fixed top-0 right-0 z-10 m-3 flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg border p-3 md:hidden" onClick={params.setOpen}>
      <div className={`h-0.5 w-5 rounded bg-white duration-300 ease-in-out ${params.open ? "translate-y-1.5 rotate-45" : ""}`}></div>
      <div className={`h-0.5 w-5 rounded bg-white duration-300 ease-in-out ${params.open ? "scale-0" : ""}`}></div>
      <div className={`h-0.5 w-5 rounded bg-white duration-300 ease-in-out ${params.open ? "-translate-y-1.5 -rotate-45" : ""}`}></div>
    </button>
  );
}

function Navbar(params: headerState) {
  return (
    <nav>
      <div className={`${params.open ? "" : "translate-x-full"} bg-bg-primary fixed top-0 right-0 mx-auto flex h-full w-full max-w-80 flex-col items-center space-y-5 pt-15 shadow-lg shadow-gray-900 transition-transform duration-300 ease-in-out md:flex md:h-15 md:max-w-full md:translate-x-0 md:flex-row md:justify-center md:space-y-0 md:space-x-3 md:pt-0 md:transition-none`}>
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
      </div>
    </nav>
  );
}

function NavTab({ label, href, setOpen }: { label: string; href: string; setOpen: () => void }) {
  return (
    <li className="text-text-primary hover:bg-bg-tertiary w-full px-3 py-4 text-center transition-colors md:w-auto md:rounded-lg md:py-1">
      <a href={href} onClick={setOpen}>
        {label}
      </a>
    </li>
  );
}

function SocialTabData(params: SocialTabData) {
  return (
    <li className="text-text-primary hover:bg-bg-tertiary flex h-9 w-9 items-center justify-center rounded-lg p-2 transition-colors">
      <a href={params.href}>
        <params.icon className="h-full w-full" />
      </a>
    </li>
  );
}
