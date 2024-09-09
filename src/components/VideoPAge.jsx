import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const VideoPage = ({ sideBar }) => {
  const { id } = useParams(); // Video ID olish
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const apiKey =
          process.env.REACT_APP_YOUTUBE_API_KEY ||
          "AIzaSyAcx9ous2pCjL2g3fVfK__9dSaZOM1hfqQ";

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setVideo(data.items[0]);
      } catch (error) {
        console.error("Error fetching video:", error);
        setError(error.message);
      }
    };

    fetchVideo();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!video) return <div>Loading...</div>;

  const videoUrl = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className="border border-red-700 p-4 ml-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">{video.snippet.title}</h1>
        <iframe
          width="100%"
          height="480"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
          title={video.snippet.title}
        ></iframe>
        <p className="mt-4">{video.snippet.description}</p>
        <p className="text-gray-500 mt-2">
          Qo‘yilgan sana:{" "}
          {new Date(video.snippet.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default VideoPage;
