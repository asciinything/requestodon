import { createSignal, onCleanup, onMount } from "solid-js";
import type { JSX } from "solid-js";

interface MenuProps {
  button: JSX.Element;
  children: JSX.Element;
}

export default function Menu({ button, children }: MenuProps): JSX.Element {
  const [isOpen, setIsOpen] = createSignal(false);
  let menuRef: HTMLDivElement | undefined;

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef && !menuRef.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  onMount(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  });

  onCleanup(() => {
    document.removeEventListener("mousedown", handleOutsideClick);
  });

  return (
    <div class="menu" ref={menuRef}>
      <div class="menu-button" onClick={() => setIsOpen(!isOpen())}>
        {button}
      </div>
      {isOpen() && <div class="menu-content">{children}</div>}
    </div>
  );
}
