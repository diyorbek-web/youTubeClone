import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import VideoList from "./VideoList";
import Favorites from "./Favorites";
import Subscription from "./Subscription";
import CreateChannel from "./CreateChannel";
const Main = ({ sideBar, query }) => {
  const [choosePage, setChoosePage] = useState(1);

  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey =
          process.env.REACT_APP_YOUTUBE_API_KEY ||
          "AIzaSyAcx9ous2pCjL2g3fVfK__9dSaZOM1hfqQ";

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}&maxResults=10`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Fetched Videos:", data);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      }
    };

    fetchVideos();
  }, [query]);

  return (
    <div className="flex">
      <Sidebar sideBar={sideBar} setChoosePage={setChoosePage} />
      {choosePage === 1 && (
        <VideoList videos={videos} sideBar={sideBar} query={query} />
      )}
      {choosePage === 2 && <Favorites sideBar={sideBar} />}
      {choosePage === 3 && <Subscription sideBar={sideBar} />}
      {choosePage === 4 && <CreateChannel sideBar={sideBar} />}
    </div>
  );
};
export default Main;
