import React, { useEffect } from "react";
import queryString from "query-string";
import Spinner from "./Spinner";
import SearchResult from "./SearchResult";

export default function Search({
  history,
  location,
  handleQuery,
  handleVideo,
  isSearching,
  query,
  results,
}) {
  useEffect(() => {
    if (!query) {
      const { q: urlQuery } = queryString.parse(location.search);
      if (!urlQuery) history.replace("/");
      handleQuery(urlQuery, false);
    }
  });

  if (isSearching) return <Spinner />;

  return (
    <>
      {results.map((video) => (
        <SearchResult
          handleVideo={handleVideo}
          video={video}
          key={video.id.videoId}
        />
      ))}
    </>
  );
}
