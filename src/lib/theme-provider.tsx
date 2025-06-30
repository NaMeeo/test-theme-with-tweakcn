"use client";

import React, { useEffect } from "react";
import { useThemeStore } from "./theme-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <>{children}</>;
}

export const useTheme = useThemeStore;
