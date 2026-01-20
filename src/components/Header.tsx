import "../styles/index.css";

import LinkedinIcon from "../assets/linkedin-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import InstagramIcon from "../assets/instagram-icon.svg?react";

import type { ReactElement } from "react";
import React, { useState } from "react";

function NavTab({ label, href, toggle }: { label: string; href: string; toggle: () => void }) {
    return (
        <li className="text-text-primary hover:bg-bg-tertiary w-full px-3 py-4 text-center transition-colors md:w-auto md:rounded-lg md:py-1">
            <a href={href} onClick={toggle}>
                {label}
            </a>
        </li>
    );
}

function SocialTab({ href, children }: { href: string; children: ReactElement }) {
    const styledChild = React.cloneElement(children as ReactElement<{ className?: string }>, { className: "w-full h-full" });

    return (
        <li className="text-text-primary hover:bg-bg-tertiary flex h-9 w-9 items-center justify-center rounded-lg p-2 transition-colors">
            <a href={href}>{styledChild}</a>
        </li>
    );
}

function Sandwich({ open, toggle }: { open: boolean; toggle: () => void }) {
    return (
        // fixed top-0 right-0
        <button className="z-10 m-5 flex flex-col gap-2 md:hidden" onClick={toggle}>
            <div className={`bg-text-primary h-1 w-10 transition-transform duration-500 ease-in-out ${open ? "translate-y-3 rotate-45" : ""}`}></div>
            <div className={`bg-text-primary h-1 w-10 transition-opacity duration-500 ease-in-out ${open ? "opacity-0" : ""}`}></div>
            <div className={`bg-text-primary h-1 w-10 transition-transform duration-500 ease-in-out ${open ? "-translate-y-3 -rotate-45" : ""}`}></div>
        </button>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className={`bg-bg-primary text-text-primary fixed flex h-15 w-full items-center justify-end shadow-lg shadow-gray-900 md:h-0`}>
            <Sandwich open={open} toggle={() => setOpen(!open)} />
            <div className={`${open ? "" : "translate-x-full"} bg-bg-primary fixed top-0 right-0 mx-auto flex h-full w-full max-w-80 flex-col items-center space-y-5 pt-15 shadow-lg shadow-gray-900 transition-transform duration-500 ease-in-out md:flex md:h-15 md:max-w-full md:translate-x-0 md:flex-row md:justify-center md:space-y-0 md:space-x-3 md:pt-0 md:transition-none`}>
                <ul className="flex w-full flex-col items-center justify-center md:w-auto md:flex-row md:space-x-1">
                    <NavTab label="Home" href="#hero" toggle={() => setOpen(false)} />
                    <NavTab label="About" href="#about" toggle={() => setOpen(false)} />
                    <NavTab label="Resume" href="#resume" toggle={() => setOpen(false)} />
                    <NavTab label="Projects" href="#projects" toggle={() => setOpen(false)} />
                    <NavTab label="Photography" href="#photography" toggle={() => setOpen(false)} />
                    <NavTab label="Contact" href="#contact" toggle={() => setOpen(false)} />
                </ul>
                <ul className="flex items-center justify-center space-x-1">
                    <SocialTab href="https://linkedin.com/in/jeremytranperez">
                        <LinkedinIcon />
                    </SocialTab>
                    <SocialTab href="https://github.com/jtp0220">
                        <GithubIcon />
                    </SocialTab>
                    <SocialTab href="https://instagram.com/jeremytranperez">
                        <InstagramIcon />
                    </SocialTab>
                </ul>
            </div>
        </header>
    );
}
