import VideoCard from "./VideoCard";

const VideoList = ({ videos, query, sideBar }) => {
  // Dependency arrayga query qo'shildi

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
