import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Player from "./Player";
import Spinner from "./Spinner";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 10,
  },
}));

export default function Watch({
  location,
  handleVideo,
  videoId,
  video,
  isLoading,
}) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!videoId) {
      const { v: urlId } = queryString.parse(location.search);
      if (!urlId) history.replace("/");
      handleVideo(urlId, false);
    }
  });

  if (isLoading || !video.snippet) return <Spinner />;

  return (
    <>
      <Player videoId={video.id} />
      <Typography variant="h5" className={classes.title}>
        {video.snippet.title}
      </Typography>
    </>
  );
}
