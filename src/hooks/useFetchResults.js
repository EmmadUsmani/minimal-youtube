import { useState, useEffect } from "react";
import { placeholderResults } from "../constants";

export default function useFetchResults(query) {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      setIsSearching(true);

      // simulating search
      setTimeout(() => {
        setIsSearching(false);
        setResults(placeholderResults.items);
      }, 500);
    }
  }, [query]);

  return [isSearching, results];
}
