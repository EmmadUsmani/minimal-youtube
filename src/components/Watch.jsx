import React from "react";
import Player from "./Player";
import Spinner from "./Spinner";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 10,
  },
}));

export default function Watch({ video, isLoading }) {
  const classes = useStyles();

  if (isLoading) return <Spinner />;

  if (video.snippet) {
    return (
      <>
        <Player videoId={video.id} />
        <Typography variant="h5" className={classes.title}>
          {video.snippet.title}
        </Typography>
      </>
    );
  }
  return null;
}
