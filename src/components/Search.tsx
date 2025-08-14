import type { JSX } from "solid-js";

export default function Search(): JSX.Element {
  return (
    <div class="search-bar">
      <input type="text" placeholder="Search Postman" />
    </div>
  );
}
