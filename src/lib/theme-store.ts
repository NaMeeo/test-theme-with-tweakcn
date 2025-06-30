"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Theme, themes, applyTheme } from "./themes";

interface ThemeState {
  theme: Theme;
  mode: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleMode: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: themes[0],
      mode: "light",
      
      setTheme: (newTheme: Theme) => {
        set({ theme: newTheme });
        const { mode } = get();
        applyTheme(newTheme, mode);
      },
      
      toggleMode: () => {
        const currentMode = get().mode;
        const newMode = currentMode === "light" ? "dark" : "light";
        set({ mode: newMode });
        
        const { theme } = get();
        applyTheme(theme, newMode);
        
        if (newMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
      
      initializeTheme: () => {
        const { theme, mode } = get();
        applyTheme(theme, mode);
        
        if (!localStorage.getItem("theme-storage")) {
          const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          const initialMode = systemPrefersDark ? "dark" : "light";
          set({ mode: initialMode });
        }
        
        if (mode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        mode: state.mode,
      }),
    }
  )
);
