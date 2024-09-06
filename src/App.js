import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [sideBar, setSideBar] = useState(false);
  const [query, setQuery] = useState("react");
  const handleSidebar = () => {
    setSideBar((prevState) => !prevState);
  };
  return (
    <div>
      <Header handleSidebar={handleSidebar} setQuery={setQuery} query={query} />
      <Main sideBar={sideBar} query={query} />
    </div>
  );
}

export default App;
