import { createSignal, onCleanup, onMount, type JSX } from "solid-js";
import "../styles/resizable.css";

interface ResizableProps {
  children: JSX.Element;
}

export default function Resizable({ children }: ResizableProps): JSX.Element {
  const [width, setWidth] = createSignal(250);
  const [isResizing, setIsResizing] = createSignal(false);
  const [isCollapsed, setIsCollapsed] = createSignal(false);

  const handleMouseDown = (e: MouseEvent) => {
    setIsResizing(true);
    document.body.classList.add("no-select");
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing()) {
      setWidth(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.body.classList.remove("no-select");
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed());
  };

  onMount(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  onCleanup(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  });

  return (
    <div class={`resizable-container ${isCollapsed() ? "collapsed" : ""}`} style={{ width: `${width()}px` }}>
      <div class="resizable-content">{children}</div>
      <div class="resize-handle" onMouseDown={handleMouseDown} />
      <div class="collapse-handle" onClick={toggleCollapse}>
        {isCollapsed() ? ">" : "<"}
      </div>
    </div>
  );
}
