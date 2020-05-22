import React from "react";
import Spinner from "./Spinner";
import SearchResult from "./SearchResult";

// TODO: reimplement query string

export default function Search({ isSearching, results, handleVideo }) {
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
