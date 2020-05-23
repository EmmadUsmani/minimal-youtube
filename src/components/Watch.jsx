import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Player from "./Player";
import Spinner from "./Spinner";
import VideoInfo from "./VideoInfo";
import VideoDesc from "./VideoDesc";

export default function Watch({
  location,
  handleWatch,
  videoId,
  video,
  isLoading,
}) {
  const history = useHistory();

  useEffect(() => {
    if (!videoId) {
      const { v: urlId } = queryString.parse(location.search);
      if (!urlId) history.replace("/");
      handleWatch(urlId, false);
    }
  });

  if (isLoading || !video.snippet) return <Spinner />;

  return (
    <>
      <Player videoId={videoId} />
      <VideoInfo video={video} />
      <VideoDesc description={video.snippet.description} />
    </>
  );
}
