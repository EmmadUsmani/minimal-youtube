import React from "react";
import Player from "./Player";
import Spinner from "./Spinner";
import { Typography } from "@material-ui/core";

export default function Watch({ history, location, video, isLoading }) {
  console.log(video, isLoading);

  if (isLoading) return <Spinner />;

  if (video.snippet) {
    return (
      <>
        <Player videoId={video.id} />
        <Typography variant="h6">{video.snippet.title}</Typography>
      </>
    );
  }
  return null;
}
