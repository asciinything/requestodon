import Titlebar from "./components/Titlebar";
import "./styles/titlebar.css";
import "./App.css";

function App() {
  return (
    <>
      <Titlebar />
      <main class="container">
        <h1>Welcome to Tauri + Solid</h1>
        <p>The rest of your app goes here.</p>
      </main>
    </>
  );
}

export default App;
