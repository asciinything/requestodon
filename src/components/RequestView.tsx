
import type { JSX } from "solid-js";
import { Button } from "./ui/button";
import { TbChevronDown, TbClock, TbDeviceFloppy, TbShare } from "solid-icons/tb";
import Astronaut from "../assets/astronaut.svg?component-solid";
import Tabs from "./Tabs";
import Params from "./tabs/Params";
import Authorization from "./tabs/Authorization";
import Headers from "./tabs/Headers";
import Body from "./tabs/Body";
import Scripts from "./tabs/Scripts";
import Settings from "./tabs/Settings";

export default function RequestView(): JSX.Element {
  const tabs = [
    { title: "Params", content: <Params /> },
    { title: "Authorization", content: <Authorization /> },
    { title: "Headers", content: <Headers /> },
    { title: "Body", content: <Body /> },
    { title: "Scripts", content: <Scripts /> },
    { title: "Settings", content: <Settings /> },
  ];

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
        <Tabs tabs={tabs} />
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
