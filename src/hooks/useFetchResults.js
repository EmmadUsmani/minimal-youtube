import { useState, useEffect } from "react";
import youtubeAPI from "../youtubeAPI";

export default function useFetchResults(query) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      setIsSearching(true);
      try {
        setResults(await youtubeAPI.search(query));
      } catch {
        setSearchFailed(true);
      }
      setIsSearching(false);
    }

    if (query) fetchResults();
  }, [query]);

  return [isSearching, searchFailed, results];
}
