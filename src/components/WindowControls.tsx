import type { JSX } from "solid-js";
import { getCurrentWindow } from "@tauri-apps/api/window";
import {VsChromeMinimize, VsChromeMaximize, VsChromeClose} from 'solid-icons/vs';

const appWindow = getCurrentWindow();

export default function WindowControls(): JSX.Element {
  const minimize = () => appWindow.minimize();
  const toggleMax = async () =>
    (await appWindow.isMaximized()) ? appWindow.unmaximize() : appWindow.maximize();
  const close = () => appWindow.close();

  return (
    <>
        <button class="tb-btn" onClick={minimize} title="Minimize"><VsChromeMinimize size={24} color="red" /></button>
        <button class="tb-btn" onClick={toggleMax} title="Zoom"><VsChromeMaximize size={24} color="red" /></button>
        <button class="tb-btn danger" onClick={close} title="Close"><VsChromeClose size={24} color="red" /></button>
    </>
  );
}
