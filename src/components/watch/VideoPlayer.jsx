import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

export default function VideoPlayer({ videoId }) {
  const classes = useStyles();

  return (
    <div className={classes.videoContainer}>
      <iframe
        title="VideoPlayer"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        allowFullScreen
        className={classes.iframe}
      ></iframe>
    </div>
  );
}
