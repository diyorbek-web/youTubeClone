import VideoCard from "./VideoCard";

const VideoList = ({ videos, query }) => {
  // Dependency arrayga query qo'shildi

  return (
    <div className={`mt-[80px] `}>
      <div className="flex flex-wrap gap-4 p-4">
        {videos.map((video) => (
          <div key={video.etag} className="flex-1 min-w-[320px] max-w-xs">
            <VideoCard key={video.id.videoId} video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
