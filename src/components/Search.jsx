import React from "react";
import queryString from "query-string";
import useFetchResults from "../hooks/useFetchResults";

export default function Search({ history, location }) {
  const { q: query } = queryString.parse(location.search);
  if (!query) history.replace("/");

  const [isLoading, videos] = useFetchResults(query);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ul>
      {videos.map((video) => (
        <li key={video}>video</li>
      ))}
    </ul>
  );
}
