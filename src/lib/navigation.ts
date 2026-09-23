import type { MouseEvent } from "react";

export function navigateToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}
