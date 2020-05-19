import { useState, useEffect } from "react";

export default function useFetchResults(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    console.log(`Searching for ${query}`);

    // simulating search
    setTimeout(() => {
      setIsLoading(false);
      setVideos(["video1", "video2", "video3", "video4"]);
    }, 2000);
  }, [query]);

  return [isLoading, videos];
}
