export interface Theme {
  name: string;
  label: string;
  cssVars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
}

export const themes: Theme[] = [
  {
    name: "default",
    label: "Default",
    cssVars: {
      light: {
        background: "oklch(1 0 0)",
        foreground: "oklch(0.145 0 0)",
        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.145 0 0)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.145 0 0)",
        primary: "oklch(0.205 0 0)",
        "primary-foreground": "oklch(0.985 0 0)",
        secondary: "oklch(0.97 0 0)",
        "secondary-foreground": "oklch(0.205 0 0)",
        muted: "oklch(0.97 0 0)",
        "muted-foreground": "oklch(0.556 0 0)",
        accent: "oklch(0.97 0 0)",
        "accent-foreground": "oklch(0.205 0 0)",
        destructive: "oklch(0.577 0.245 27.325)",
        border: "oklch(0.922 0 0)",
        input: "oklch(0.922 0 0)",
        ring: "oklch(0.708 0 0)"
      },
      dark: {
        background: "oklch(0.145 0 0)",
        foreground: "oklch(0.985 0 0)",
        card: "oklch(0.205 0 0)",
        "card-foreground": "oklch(0.985 0 0)",
        popover: "oklch(0.205 0 0)",
        "popover-foreground": "oklch(0.985 0 0)",
        primary: "oklch(0.922 0 0)",
        "primary-foreground": "oklch(0.205 0 0)",
        secondary: "oklch(0.269 0 0)",
        "secondary-foreground": "oklch(0.985 0 0)",
        muted: "oklch(0.269 0 0)",
        "muted-foreground": "oklch(0.708 0 0)",
        accent: "oklch(0.269 0 0)",
        "accent-foreground": "oklch(0.985 0 0)",
        destructive: "oklch(0.704 0.191 22.216)",
        border: "oklch(1 0 0 / 10%)",
        input: "oklch(1 0 0 / 15%)",
        ring: "oklch(0.556 0 0)"
      }
    }
  },
  {
    name: "blue",
    label: "Ocean Blue",
    cssVars: {
      light: {
        background: "oklch(0.98 0.02 240)",
        foreground: "oklch(0.15 0.04 240)",
        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.15 0.04 240)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.15 0.04 240)",
        primary: "oklch(0.55 0.18 240)",
        "primary-foreground": "oklch(0.98 0.02 240)",
        secondary: "oklch(0.95 0.02 240)",
        "secondary-foreground": "oklch(0.15 0.04 240)",
        muted: "oklch(0.95 0.02 240)",
        "muted-foreground": "oklch(0.45 0.04 240)",
        accent: "oklch(0.92 0.04 240)",
        "accent-foreground": "oklch(0.15 0.04 240)",
        destructive: "oklch(0.65 0.25 15)",
        border: "oklch(0.88 0.02 240)",
        input: "oklch(0.88 0.02 240)",
        ring: "oklch(0.55 0.18 240)"
      },
      dark: {
        background: "oklch(0.12 0.04 240)",
        foreground: "oklch(0.95 0.02 240)",
        card: "oklch(0.18 0.04 240)",
        "card-foreground": "oklch(0.95 0.02 240)",
        popover: "oklch(0.18 0.04 240)",
        "popover-foreground": "oklch(0.95 0.02 240)",
        primary: "oklch(0.75 0.18 240)",
        "primary-foreground": "oklch(0.12 0.04 240)",
        secondary: "oklch(0.25 0.04 240)",
        "secondary-foreground": "oklch(0.95 0.02 240)",
        muted: "oklch(0.25 0.04 240)",
        "muted-foreground": "oklch(0.65 0.04 240)",
        accent: "oklch(0.3 0.06 240)",
        "accent-foreground": "oklch(0.95 0.02 240)",
        destructive: "oklch(0.75 0.25 15)",
        border: "oklch(1 0 0 / 15%)",
        input: "oklch(1 0 0 / 20%)",
        ring: "oklch(0.75 0.18 240)"
      }
    }
  },
  {
    name: "green",
    label: "Forest Green",
    cssVars: {
      light: {
        background: "oklch(0.98 0.02 150)",
        foreground: "oklch(0.15 0.04 150)",
        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.15 0.04 150)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.15 0.04 150)",
        primary: "oklch(0.45 0.15 150)",
        "primary-foreground": "oklch(0.98 0.02 150)",
        secondary: "oklch(0.95 0.02 150)",
        "secondary-foreground": "oklch(0.15 0.04 150)",
        muted: "oklch(0.95 0.02 150)",
        "muted-foreground": "oklch(0.45 0.04 150)",
        accent: "oklch(0.92 0.04 150)",
        "accent-foreground": "oklch(0.15 0.04 150)",
        destructive: "oklch(0.65 0.25 15)",
        border: "oklch(0.88 0.02 150)",
        input: "oklch(0.88 0.02 150)",
        ring: "oklch(0.45 0.15 150)"
      },
      dark: {
        background: "oklch(0.12 0.04 150)",
        foreground: "oklch(0.95 0.02 150)",
        card: "oklch(0.18 0.04 150)",
        "card-foreground": "oklch(0.95 0.02 150)",
        popover: "oklch(0.18 0.04 150)",
        "popover-foreground": "oklch(0.95 0.02 150)",
        primary: "oklch(0.65 0.15 150)",
        "primary-foreground": "oklch(0.12 0.04 150)",
        secondary: "oklch(0.25 0.04 150)",
        "secondary-foreground": "oklch(0.95 0.02 150)",
        muted: "oklch(0.25 0.04 150)",
        "muted-foreground": "oklch(0.65 0.04 150)",
        accent: "oklch(0.3 0.06 150)",
        "accent-foreground": "oklch(0.95 0.02 150)",
        destructive: "oklch(0.75 0.25 15)",
        border: "oklch(1 0 0 / 15%)",
        input: "oklch(1 0 0 / 20%)",
        ring: "oklch(0.65 0.15 150)"
      }
    }
  },
  {
    name: "purple",
    label: "Royal Purple",
    cssVars: {
      light: {
        background: "oklch(0.98 0.02 300)",
        foreground: "oklch(0.15 0.04 300)",
        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.15 0.04 300)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.15 0.04 300)",
        primary: "oklch(0.5 0.2 300)",
        "primary-foreground": "oklch(0.98 0.02 300)",
        secondary: "oklch(0.95 0.02 300)",
        "secondary-foreground": "oklch(0.15 0.04 300)",
        muted: "oklch(0.95 0.02 300)",
        "muted-foreground": "oklch(0.45 0.04 300)",
        accent: "oklch(0.92 0.04 300)",
        "accent-foreground": "oklch(0.15 0.04 300)",
        destructive: "oklch(0.65 0.25 15)",
        border: "oklch(0.88 0.02 300)",
        input: "oklch(0.88 0.02 300)",
        ring: "oklch(0.5 0.2 300)"
      },
      dark: {
        background: "oklch(0.12 0.04 300)",
        foreground: "oklch(0.95 0.02 300)",
        card: "oklch(0.18 0.04 300)",
        "card-foreground": "oklch(0.95 0.02 300)",
        popover: "oklch(0.18 0.04 300)",
        "popover-foreground": "oklch(0.95 0.02 300)",
        primary: "oklch(0.7 0.2 300)",
        "primary-foreground": "oklch(0.12 0.04 300)",
        secondary: "oklch(0.25 0.04 300)",
        "secondary-foreground": "oklch(0.95 0.02 300)",
        muted: "oklch(0.25 0.04 300)",
        "muted-foreground": "oklch(0.65 0.04 300)",
        accent: "oklch(0.3 0.06 300)",
        "accent-foreground": "oklch(0.95 0.02 300)",
        destructive: "oklch(0.75 0.25 15)",
        border: "oklch(1 0 0 / 15%)",
        input: "oklch(1 0 0 / 20%)",
        ring: "oklch(0.7 0.2 300)"
      }
    }
  },
  {
    name: "rose",
    label: "Rose Gold",
    cssVars: {
      light: {
        background: "oklch(0.98 0.02 30)",
        foreground: "oklch(0.15 0.04 30)",
        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.15 0.04 30)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.15 0.04 30)",
        primary: "oklch(0.55 0.15 30)",
        "primary-foreground": "oklch(0.98 0.02 30)",
        secondary: "oklch(0.95 0.02 30)",
        "secondary-foreground": "oklch(0.15 0.04 30)",
        muted: "oklch(0.95 0.02 30)",
        "muted-foreground": "oklch(0.45 0.04 30)",
        accent: "oklch(0.92 0.04 30)",
        "accent-foreground": "oklch(0.15 0.04 30)",
        destructive: "oklch(0.65 0.25 15)",
        border: "oklch(0.88 0.02 30)",
        input: "oklch(0.88 0.02 30)",
        ring: "oklch(0.55 0.15 30)"
      },
      dark: {
        background: "oklch(0.12 0.04 30)",
        foreground: "oklch(0.95 0.02 30)",
        card: "oklch(0.18 0.04 30)",
        "card-foreground": "oklch(0.95 0.02 30)",
        popover: "oklch(0.18 0.04 30)",
        "popover-foreground": "oklch(0.95 0.02 30)",
        primary: "oklch(0.7 0.15 30)",
        "primary-foreground": "oklch(0.12 0.04 30)",
        secondary: "oklch(0.25 0.04 30)",
        "secondary-foreground": "oklch(0.95 0.02 30)",
        muted: "oklch(0.25 0.04 30)",
        "muted-foreground": "oklch(0.65 0.04 30)",
        accent: "oklch(0.3 0.06 30)",
        "accent-foreground": "oklch(0.95 0.02 30)",
        destructive: "oklch(0.75 0.25 15)",
        border: "oklch(1 0 0 / 15%)",
        input: "oklch(1 0 0 / 20%)",
        ring: "oklch(0.7 0.15 30)"
      }
    }
  }
];

export function applyTheme(theme: Theme, mode: "light" | "dark") {
  const root = document.documentElement;
  const colors = theme.cssVars[mode];
  
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}
