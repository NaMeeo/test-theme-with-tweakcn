"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme, themes, applyTheme } from "./themes";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: "light" | "dark";
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(themes[0]);
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme-mode", newMode);
  };

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme-name", newTheme.name);
  };

  useEffect(() => {
    const savedThemeName = localStorage.getItem("theme-name");
    const savedMode = localStorage.getItem("theme-mode") as
      | "light"
      | "dark"
      | null;

    if (savedThemeName) {
      const savedTheme = themes.find((t) => t.name === savedThemeName);
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }

    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    applyTheme(theme, mode);

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, mode]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: handleSetTheme, mode, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
