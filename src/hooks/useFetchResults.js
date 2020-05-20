import { useState, useEffect } from "react";
import { placeholderData } from "../constants";

export default function useFetchResults(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    // simulating search
    setTimeout(() => {
      setIsLoading(false);
      setResults(placeholderData.items);
    }, 1000);
  }, [query]);

  return [isLoading, results];
}
