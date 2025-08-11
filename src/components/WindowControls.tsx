import type { JSX } from "solid-js";
import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

export default function WindowControls(): JSX.Element {
  const minimize = () => appWindow.minimize();
  const toggleMax = async () =>
    (await appWindow.isMaximized()) ? appWindow.unmaximize() : appWindow.maximize();
  const close = () => appWindow.close();

  return (
    <>
        <button class="tb-btn" onClick={minimize} title="Minimize">—</button>
        <button class="tb-btn" onClick={toggleMax} title="Zoom">▢</button>
        <button class="tb-btn danger" onClick={close} title="Close">×</button>
    </>
  );
}
