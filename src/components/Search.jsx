import React from "react";
import Spinner from "./Spinner";
import SearchResult from "./SearchResult";

// TODO: reimplement query string

export default function Search({ isLoading, results }) {
  if (isLoading) return <Spinner />;

  return (
    <>
      {results.map((video) => (
        <SearchResult video={video} key={video.id.videoId} />
      ))}
    </>
  );
}
