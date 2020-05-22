import { useState, useEffect } from "react";
import { placeholderVideos } from "../constants";

export default function useFetchVideo(videoId) {
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState({});

  useEffect(() => {
    if (videoId) {
      setIsLoading(true);

      // simulating video load
      setTimeout(() => {
        setVideo(
          placeholderVideos.find((response) => response.items[0].id === videoId)
            .items[0]
        );
        setIsLoading(false);
      }, 500);
    }
  }, [videoId]);

  return [isLoading, video];
}
