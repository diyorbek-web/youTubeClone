import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoPage from "./components/VideoPage"; // Yangi sahifa komponenti
import Sidebar from "./components/Sidebar";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [query, setQuery] = useState("react");
  const [choosePage, setChoosePage] = useState(1);

  const handleSidebar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <Router>
      <Header handleSidebar={handleSidebar} setQuery={setQuery} query={query} />
      <div className="flex">
        <Sidebar sideBar={sideBar} setChoosePage={setChoosePage} />
        <Routes>
          <Route
            path="/"
            element={
              <Main sideBar={sideBar} query={query} choosePage={choosePage} />
            }
          />
          <Route path="/video/:id" element={<VideoPage sideBar={sideBar} />} />{" "}
          {/* Video sahifasi */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
