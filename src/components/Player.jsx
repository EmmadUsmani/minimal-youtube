import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: "relative",
    paddingBottom: "56.25%", // 16:9
    height: 0,
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
}));

export default function Player({ videoId }) {
  const classes = useStyles();

  return (
    <div className={classes.videoContainer}>
      <iframe
        title="Player"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        allowFullScreen
        className={classes.iframe}
      ></iframe>
    </div>
  );
}
