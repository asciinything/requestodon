import { createSignal, onMount, Show } from "solid-js";
import type { JSX } from "solid-js";
import { type as getOsType } from "@tauri-apps/api/os";
import WindowControls from "./WindowControls";

export default function Titlebar(): JSX.Element {
  const [osType, setOsType] = createSignal<string | null>(null);

  onMount(async () => {
    const os = await type();
    setOsType(os);
  });

  return (
    <div class="titlebar">
        <div class="drag-region" data-tauri-drag-region>
            <Show when={osType() === 'Darwin'}>
                <div style="width: 70px;"></div>
            </Show>
        </div>

        <div class="toolbar" aria-label="window controls">
            <input class="tb-input" placeholder="Enter text..." />
            <button class="tb-btn">Go</button>
        </div>

        <div class="drag-region" data-tauri-drag-region />

        <Show when={osType() !== 'Darwin'}>
            <WindowControls />
        </Show>
    </div>
  );
}