import { createSignal, onMount, Show } from "solid-js";
import type { JSX } from "solid-js";
import { platform } from '@tauri-apps/plugin-os';
import WindowControls from "./WindowControls";
import { Button } from "~/components/ui/button";

export default function Titlebar(): JSX.Element {

  onMount(async () => {
  });

    const currentPlatform = platform();

  return (
    <div class="titlebar">
        <div class="drag-region" data-tauri-drag-region>
            <Show when={currentPlatform === 'windows'}>
                <div style="width: 70px;"></div>
            </Show>
        </div>

        <div class="toolbar" aria-label="window controls">
            <input class="tb-input" placeholder="Enter text..." />
            <Button>Click me</Button>
        </div>

        <div class="drag-region" data-tauri-drag-region />

        <Show when={currentPlatform === 'windows'}>
            <WindowControls />
        </Show>
    </div>
  );
}