import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Dark mode by default
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const shouldBeDark = storedTheme !== "light";

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative w-20 h-9 px-1
        rounded-full flex items-center
        transition-all duration-300

        /* Track colors */
        bg-gray-200
        dark:bg-gray-800

        /* Track depth */
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)]
        dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.06)]
      `}
    >
      {/* Sliding knob */}
      <span
        className={`
          absolute top-1 left-1
          h-7 w-7 rounded-full
          flex items-center justify-center
          transition-transform duration-300

          /* Knob colors */
          bg-white
          dark:bg-gray-700

          /* Knob depth */
          shadow-[0_4px_10px_rgba(0,0,0,0.25)]
          dark:shadow-[0_4px_10px_rgba(0,0,0,0.6)]

          ${isDark ? "translate-x-11" : "translate-x-0"}
        `}
      >
        {isDark ? (
          <MoonIcon className="h-4 w-4 text-gray-100" />
        ) : (
          <SunIcon className="h-4 w-4 text-gray-700" />
        )}
      </span>
    </button>
  );
}
