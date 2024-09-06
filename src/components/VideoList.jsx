import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ query, sideBar }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  console.log(query);
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
  }, [query]); // Dependency arrayga query qo'shildi

  return (
    <div
      className={`mt-[80px] h-[1000px] ${sideBar ? "ml-[5%]" : "ml-[15%]"}  ${
        sideBar ? "w-[95%]" : "w-[85%]"
      }`}
    >
      <div className="flex flex-wrap gap-4 p-4">
        {videos.map((video) => (
          <div className="flex-1 min-w-[320px] max-w-xs">
            <VideoCard key={video.id.videoId} video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
