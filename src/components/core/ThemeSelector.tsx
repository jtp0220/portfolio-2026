import { useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";

type Theme = "default" | "red" | "green" | "purple" | "charcoal" | "vanilla";

export default function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "default";
  });

  const themeOptions: Theme[] = ["default", "red", "green", "purple", "charcoal", "vanilla"];

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
    <div className="text-text-primary hover:bg-bg-tertiary flex h-9 w-9 items-center justify-center rounded-lg p-1">
      <button
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
