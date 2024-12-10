"use client"

import { useEffect, useState } from "react";
import { IconSun, IconMoon } from '@tabler/icons-react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on first load
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="p-1 rounded"
    >
      {darkMode ? (
        <IconSun size='1rem' className="w-6 h-6 text-yellow-500 "
        onClick={toggleDarkMode} />
      ) : (
        <IconMoon className="w-6 h-6 text-gray-900 " onClick={toggleDarkMode} />
      )}
    </button>
  );
};

export default DarkModeToggle;
