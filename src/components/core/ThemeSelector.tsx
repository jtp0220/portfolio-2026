import { useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";

type Theme = "default" | "blue" | "charcoal" | "vanilla";

const themeOptions: Theme[] = ["default", "blue", "vanilla", "charcoal"];

export default function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    return themeOptions.includes(storedTheme) ? storedTheme : "default";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="text-text-secondary hover:text-accent flex h-9 w-9 items-center justify-center p-1">
      <button
        aria-label={`Change theme (current: ${theme})`}
        className="cursor-pointer"
        onClick={() => {
          let idx = themeOptions.indexOf(theme);
          idx = (idx + 1) % themeOptions.length;
          setTheme(themeOptions[idx]);
        }}
      >
        <IoIosColorPalette size={30} />
      </button>
    </div>
  );
}
