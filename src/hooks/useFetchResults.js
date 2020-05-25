import { useState, useEffect } from "react";
import youtubeAPI from "../youtubeAPI";

export default function useFetchResults(query) {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      setIsSearching(true);
      setResults(await youtubeAPI.search(query));
      setIsSearching(false);
    }

    if (query) fetchResults();
  }, [query]);

  return [isSearching, results];
}
