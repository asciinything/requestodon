import { createSignal, onMount, Show, type JSX } from "solid-js";
import { platform } from '@tauri-apps/plugin-os';
import WindowControls from "./WindowControls";
import { Button } from "./ui/button";
import Menu from "./Menu";
import Search from "./Search";
import ThemeSelector from "./ThemeSelector";

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
            <div class="flex items-center space-x-2">
                <Button variant="ghost" class="w-8 h-8 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </Button>
                <Button variant="ghost" class="w-8 h-8 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Button>
            </div>
            <Button variant="ghost">Home</Button>
            <Menu button={<Button variant="ghost">Workspaces</Button>}>
                {/* Add workspace options here */}
            </Menu>
            <Search />
        </div>

        <div class="drag-region" data-tauri-drag-region />

        <div class="titlebar-actions">
            <ThemeSelector />
            <Button variant="ghost">Invite</Button>
            {/* Add more action buttons here */}
        </div>

        <Show when={currentPlatform === 'windows'}>
            <WindowControls />
        </Show>
    </div>
  );
}