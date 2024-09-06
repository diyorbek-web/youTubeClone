import { useState } from "react";
import Sidebar from "./Sidebar";
import VideoList from "./VideoList";
import Favorites from "./Favorites";
import Subscription from "./Subscription";
import CreateChannel from "./CreateChannel";
const Main = ({ sideBar, query }) => {
  const [choosePage, setChoosePage] = useState(1);
  console.log(choosePage);
  return (
    <div className="flex">
      <Sidebar sideBar={sideBar} setChoosePage={setChoosePage} />
      {choosePage === 1 && <VideoList sideBar={sideBar} query={query} />}
      {choosePage === 2 && <Favorites sideBar={sideBar} />}
      {choosePage === 3 && <Subscription sideBar={sideBar} />}
      {choosePage === 4 && <CreateChannel sideBar={sideBar} />}
    </div>
  );
};
export default Main;
