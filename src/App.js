import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoPage from "./components/VideoPAge"; // Yangi sahifa komponenti

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [query, setQuery] = useState("react");

  const handleSidebar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <Router>
      <Header handleSidebar={handleSidebar} setQuery={setQuery} query={query} />
      <Routes>
        <Route path="/" element={<Main sideBar={sideBar} query={query} />} />
        <Route path="/video/:id" element={<VideoPage />} />{" "}
        {/* Video sahifasi */}
      </Routes>
    </Router>
  );
}

export default App;
