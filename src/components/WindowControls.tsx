import {createSignal, onCleanup, onMount, type JSX} from "solid-js";
import {getCurrentWindow} from "@tauri-apps/api/window";
import {VsChromeMinimize, VsChromeMaximize, VsChromeClose, VsChromeRestore} from 'solid-icons/vs';

const appWindow = getCurrentWindow();

export default function WindowControls(): JSX.Element {
    const [maximized, setMaximized] = createSignal(false);

    const minimize = () => appWindow.minimize();
    const toggleMax = async () =>
        (await appWindow.isMaximized()) ? appWindow.unmaximize() : appWindow.maximize();
    const close = () => appWindow.close();

    const updateMaximized = async () => {
        setMaximized(await appWindow.isMaximized());
    }

    onMount(async () => {
        await updateMaximized();
        const unlisten = await appWindow.onResized(async () => {
            await updateMaximized();
        });
        onCleanup(() => {
            unlisten();
        });
    });


    return (
        <>
            <button class="tb-btn" onClick={minimize} title="Minimize"><VsChromeMinimize size={24} color="red"/></button>
            <button class="tb-btn" onClick={toggleMax} title="Zoom">
                {maximized() ? <VsChromeRestore size={24} color="red"/> : <VsChromeMaximize size={24} color="red"/>}
            </button>
            <button class="tb-btn danger" onClick={close} title="Close"><VsChromeClose size={24} color="red"/></button>
        </>
    );
}
