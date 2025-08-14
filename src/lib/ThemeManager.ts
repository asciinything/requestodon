import { createSignal, onMount } from "solid-js";

export interface Theme {
  name: string;
  colors: Record<string, string>;
}

export const [currentTheme, setCurrentTheme] = createSignal<Theme | null>(null);

export const loadThemes = async (): Promise<Theme[]> => {
  const themeFiles = import.meta.glob("/src/themes/*.json");
  const themes: Theme[] = [];
  for (const path in themeFiles) {
    const theme = (await themeFiles[path]()) as Theme;
    themes.push(theme);
  }
  return themes;
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  for (const [name, color] of Object.entries(theme.colors)) {
    root.style.setProperty(`--color-${name}`, color);
  }
  setCurrentTheme(theme);
};

export const useThemes = () => {
  const [themes, setThemes] = createSignal<Theme[]>([]);

  onMount(async () => {
    const loadedThemes = await loadThemes();
    setThemes(loadedThemes);
    if (loadedThemes.length > 0) {
      applyTheme(loadedThemes[0]);
    }
  });

  return { themes, currentTheme, applyTheme };
};
