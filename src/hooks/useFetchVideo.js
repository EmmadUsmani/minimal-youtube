import { useState, useEffect } from "react";
import youtubeAPI from "../youtubeAPI";

export default function useFetchVideo(videoId) {
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState({});

  useEffect(() => {
    async function fetchVideo() {
      setIsLoading(true);
      setVideo(await youtubeAPI.watch(videoId));
      setIsLoading(false);
    }

    if (videoId) fetchVideo();
  }, [videoId]);

  return [isLoading, video];
}
