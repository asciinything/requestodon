
import type { JSX } from "solid-js";
import { Button } from "./ui/button";
import { TbBox, TbChevronRight, TbCode, TbFile, TbHistory, TbPlus } from "solid-icons/tb";

export default function Sidebar(): JSX.Element {
  return (
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="workspace-selector">
          <span>My Workspace</span>
        </div>
        <div class="sidebar-actions">
            <Button variant="ghost">New</Button>
            <Button variant="ghost">Import</Button>
        </div>
      </div>
      <div class="sidebar-content">
        <div class="collections-list">
            <div class="collection-item">
                <TbChevronRight size={16} />
                <TbBox size={16} />
                <span>Test</span>
            </div>
            <div class="collection-item-details">
                <div class="request-item">
                    <span>GET</span>
                    <span>New Request</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
