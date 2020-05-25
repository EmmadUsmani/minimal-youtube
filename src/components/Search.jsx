import React, { useEffect } from "react";
import queryString from "query-string";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Spinner from "./Spinner";
import SearchResult from "./SearchResult";
import SearchResultVertical from "./SearchResultVertical";

export default function Search({
  history,
  location,
  handleSearch,
  handleWatch,
  isSearching,
  query,
  results,
}) {
  const smallScreen = useMediaQuery("(max-width: 550px");
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
      {results.map((result) =>
        smallScreen ? (
          <SearchResultVertical
            handleWatch={handleWatch}
            result={result}
            key={result.id.videoId}
          />
        ) : (
          <SearchResult
            handleWatch={handleWatch}
            result={result}
            key={result.id.videoId}
          />
        )
      )}
    </>
  );
}
