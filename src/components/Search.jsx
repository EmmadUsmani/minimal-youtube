import React from "react";
import queryString from "query-string";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import useFetchResults from "../hooks/useFetchResults";
import SearchResult from "./SearchResult";

const useStyles = makeStyles((theme) => ({
  progress: {
    position: "absolute",
    top: "50%",
    bottom: "50%",
    left: "50%",
    right: "50%",
    marginLeft: -20,
    marginTop: -20,
  },
}));

export default function Search({ history, location }) {
  const classes = useStyles();
  const { q: query } = queryString.parse(location.search);
  if (!query) history.replace("/");

  const [isLoading, results] = useFetchResults(query);

  if (isLoading) return <CircularProgress className={classes.progress} />;

  return (
    <>
      {results.map((video) => (
        <SearchResult video={video} key={video.id.videoId} />
      ))}
    </>
  );
}
