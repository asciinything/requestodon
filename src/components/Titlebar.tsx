import { createSignal, onMount, Show } from "solid-js";
import type { JSX } from "solid-js";
import { platform } from '@tauri-apps/plugin-os';
import WindowControls from "./WindowControls";
import { Button } from "~/components/ui/button";
import Menu from "./Menu";
import Search from "./Search";

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
            <Button variant="ghost">Home</Button>
            <Menu button={<Button variant="ghost">Workspaces</Button>}>
                {/* Add workspace options here */}
            </Menu>
            <Button variant="ghost">API Network</Button>
            <Search />
        </div>

        <div class="drag-region" data-tauri-drag-region />

        <div class="titlebar-actions">
            <Button variant="ghost">Invite</Button>
            {/* Add more action buttons here */}
        </div>

        <Show when={currentPlatform === 'windows'}>
            <WindowControls />
        </Show>
    </div>
  );
}