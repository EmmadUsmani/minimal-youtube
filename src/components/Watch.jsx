import React from "react";
import queryString from "query-string";
import Player from "./Player";

export default function Watch({ history, location }) {
  const { v: videoId } = queryString.parse(location.search);
  if (!videoId) history.replace("/");

  return <Player videoId={videoId} />;
}
