import { createSignal, For, JSX } from "solid-js";

interface Tab {
  title: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps): JSX.Element {
  const [selectedTab, setSelectedTab] = createSignal(0);

  return (
    <div class="tabs-container">
      <div class="tabs">
        <For each={tabs}>
          {(tab, index) => (
            <div
              class={`tab ${selectedTab() === index() ? "active" : ""}`}
              onClick={() => setSelectedTab(index())}
            >
              {tab.title}
            </div>
          )}
        </For>
      </div>
      <div class="tab-content">
        {tabs[selectedTab()].content}
      </div>
    </div>
  );
}
