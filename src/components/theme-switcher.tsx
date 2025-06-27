"use client";

import React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/lib/theme-provider";
import { themes } from "@/lib/themes";

const themeColors: Record<string, string> = {
  default: "#0a0a0a",
  blue: "#3b82f6",
  green: "#10b981",
  purple: "#8b5cf6",
  rose: "#f43f5e",
};

export function ThemeSwitcher() {
  const { theme, setTheme, mode, toggleMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Theme Color Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette className="h-4 w-4" />
            <span className="sr-only">Select theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Theme Colors</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {themes.map((themeOption) => (
            <DropdownMenuItem
              key={themeOption.name}
              onClick={() => setTheme(themeOption)}
              className={theme.name === themeOption.name ? "bg-accent" : ""}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border border-border" 
                  style={{ 
                    backgroundColor: themeColors[themeOption.name] || "#0a0a0a"
                  }}
                />
                {themeOption.label}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Light/Dark Mode Toggle */}
      <Button variant="outline" size="icon" onClick={toggleMode}>
        {mode === "light" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle theme mode</span>
      </Button>
    </div>
  );
}
