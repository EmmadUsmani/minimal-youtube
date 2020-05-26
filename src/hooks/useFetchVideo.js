import { useState, useEffect } from "react";
import youtubeAPI from "../youtubeAPI";

export default function useFetchVideo(videoId) {
  const [isLoading, setIsLoading] = useState(false);
  const [watchFailed, setWatchFailed] = useState(false);
  const [video, setVideo] = useState({});

  useEffect(() => {
    async function fetchVideo() {
      setIsLoading(true);
      try {
        setVideo(await youtubeAPI.watch(videoId));
      } catch {
        setWatchFailed(true);
      }
      setIsLoading(false);
    }

    if (videoId) fetchVideo();
  }, [videoId]);

  return [isLoading, watchFailed, video];
}
