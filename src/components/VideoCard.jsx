import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // Sana formatlash
  const uploadDate = video.snippet.publishedAt
    ? new Date(video.snippet.publishedAt)
    : new Date();
  const formattedDate = uploadDate.toLocaleDateString();

  // Tavsifni to'g'ri formatlash
  const description = video.snippet.description
    ? video.snippet.description.substring(0, 100) +
      (video.snippet.description.length > 100 ? "..." : "")
    : "Ma'lumot yo'q";

  return (
    <Link
      to={`/video/${video.id.videoId}`}
      className="max-w-xs cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col h-[370px]"
    >
      <img
        className="w-full h-[200px] object-cover"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-auto">
          <h2 className="text-[18px] line-clamp-2 font-semibold">
            {video.snippet.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2 mt-2">
            {description}
          </p>
        </div>
        <p className="font-bold p-1 text-xs border-t border-gray-200">
          {video.snippet.channelTitle}
        </p>
        <p className="text-gray-500 text-xs mt-1">
          <span className="font-semibold">Qo‘yilgan sana:</span> {formattedDate}
        </p>
      </div>
    </Link>
  );
};

export default VideoCard;
