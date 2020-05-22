import React, { useEffect } from "react";
import queryString from "query-string";
import Spinner from "./Spinner";
import SearchResult from "./SearchResult";

export default function Search({
  history,
  location,
  handleSearch,
  handleWatch,
  isSearching,
  query,
  results,
}) {
  useEffect(() => {
    if (!query) {
      const { q: urlQuery } = queryString.parse(location.search);
      if (!urlQuery) history.replace("/");
      handleSearch(urlQuery, false);
    }
  });

  if (isSearching) return <Spinner />;

  return (
    <>
      {results.map((result) => (
        <SearchResult
          handleWatch={handleWatch}
          result={result}
          key={result.id.videoId}
        />
      ))}
    </>
  );
}
