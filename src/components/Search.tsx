import type { JSX } from "solid-js";
import { FiSearch } from 'solid-icons/fi';

export default function Search(): JSX.Element {
  return (
    <div class="search-bar">
      <FiSearch size={20} />
      <input type="text" placeholder="Search Requestodon" />
    </div>
  );
}
