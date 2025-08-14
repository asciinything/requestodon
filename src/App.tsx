import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";
import RequestView from "./components/RequestView";
import Footer from "./components/Footer";
import "./styles/titlebar.css";
import "./styles/sidebar.css";
import "./styles/request-view.css";
import "./styles/footer.css";
import "./styles/components.css";
import "./App.css";

function App() {
  return (
    <div class="app-container">
      <Titlebar />
      <div class="main-content">
        <Sidebar />
        <RequestView />
      </div>
      <Footer />
    </div>
  );
}

export default App;
