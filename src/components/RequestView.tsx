
import type { JSX } from "solid-js";
import { Button } from "./ui/button";
import { TbChevronDown, TbClock, TbDeviceFloppy, TbShare } from "solid-icons/tb";
import Astronaut from "../assets/astronaut.svg?component-solid";

export default function RequestView(): JSX.Element {
  return (
    <div class="request-view">
        <div class="request-tabs">
            <div class="tab-item active">
                <span class="tab-name">New Request</span>
            </div>
        </div>
      <div class="request-bar">
        <select class="request-method">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <input class="request-url" placeholder="Enter URL or describe the request to Postbot" />
        <Button>Send</Button>
        <div class="request-actions">
            <Button variant="ghost"><TbDeviceFloppy size={16} /> Save</Button>
            <Button variant="ghost"><TbShare size={16} /> Share</Button>
        </div>
      </div>
      <div class="request-body">
        <div class="tabs">
          <div class="tab">Params</div>
          <div class="tab">Authorization</div>
          <div class="tab">Headers</div>
          <div class="tab active">Body</div>
          <div class="tab">Scripts</div>
          <div class="tab">Settings</div>
        </div>
        <div class="tab-content">
          {/* Tab content will go here */}
        </div>
      </div>
      <div class="response-view">
        <div class="response-header">
            <span>Response</span>
            <div class="response-actions">
                <Button variant="ghost"><TbClock size={16} /> History</Button>
                <Button variant="ghost"><TbChevronDown size={16} /></Button>
            </div>
        </div>
        <div class="response-content empty">
            <Astronaut />
            <p>Enter the URL and click Send to get a response</p>
        </div>
      </div>
    </div>
  );
}
