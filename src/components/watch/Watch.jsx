import React, { useEffect } from "react";
import queryString from "query-string";
import Spinner from "../common/Spinner";
import Player from "./VideoPlayer";
import VideoInfo from "./VideoInfo";
import VideoDesc from "./VideoDesc";

export default function Watch({
  history,
  location,
  handleWatch,
  videoId,
  video,
  isLoading,
  isDark,
}) {
  // handle query string in URL
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
      <VideoDesc description={video.snippet.description} isDark={isDark} />
    </>
  );
}
