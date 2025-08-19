import { onMount, Show, type JSX } from "solid-js";
import { platform } from '@tauri-apps/plugin-os';
import WindowControls from "./WindowControls";
import { Button } from "./ui/button";
import Search from "./Search";
import ThemeSelector from "./ThemeSelector";
import { TbSettings } from 'solid-icons/tb';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "./ui/navigation-menu";

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

            <Search />
        </div>

        <div class="drag-region" data-tauri-drag-region />

        <div class="titlebar-actions">
            <Button variant="ghost">Invite</Button>
            <NavigationMenu>
                <NavigationMenuItem>
                    <NavigationMenuTrigger class="tb-btn">
                        <TbSettings size={24} />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ThemeSelector />
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenu>
            {/* Add more action buttons here */}
        </div>

        <Show when={currentPlatform === 'windows'}>
            <WindowControls />
        </Show>
    </div>
  );
}