
import type { JSX } from "solid-js";
import { TbCloud, TbSearch, TbTerminal2 } from "solid-icons/tb";

export default function Footer(): JSX.Element {
  return (
    <div class="footer">
        <div class="footer-item">
            <TbCloud size={16} />
            <span>Online</span>
        </div>
        <div class="footer-item">
            <TbSearch size={16} />
            <span>Find and replace</span>
        </div>
        <div class="footer-item">
            <TbTerminal2 size={16} />
            <span>Console</span>
        </div>
    </div>
  );
}
