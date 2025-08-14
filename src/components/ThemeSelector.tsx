import { For } from "solid-js";
import { useThemes, type Theme } from "../lib/ThemeManager";

export default function ThemeSelector() {
  const { themes, currentTheme, applyTheme } = useThemes();

  const handleThemeChange = (event: Event) => {
    const selectedThemeName = (event.target as HTMLSelectElement).value;
    const selectedTheme = themes().find((theme) => theme.name === selectedThemeName);
    if (selectedTheme) {
      applyTheme(selectedTheme);
    }
  };

  return (
    <div class="theme-selector">
      <select onChange={handleThemeChange}>
        <For each={themes()}>
          {(theme: Theme) => (
            <option value={theme.name} selected={theme.name === currentTheme()?.name}>
              {theme.name}
            </option>
          )}
        </For>
      </select>
    </div>
  );
}
