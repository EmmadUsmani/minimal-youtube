import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Footer from "./components/Footer";
import useFetchResults from "./hooks/useFetchResults";
import useFetchVideo from "./hooks/useFetchVideo";

// TODO: dark theme
// TODO: different card for small screens
// TODO: connect youtube api

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 20,
    paddingBottom: 30,
  },
}));

export default function App() {
  const classes = useStyles();
  const history = useHistory();

  const [query, setQuery] = useState("");
  const [videoId, setVideoId] = useState("");

  const [isSearching, results] = useFetchResults(query);
  const [isLoading, video] = useFetchVideo(videoId);

  const handleSearch = (input, redirect = true) => {
    setQuery(input);
    if (redirect) history.push(`/search?q=${input}`);
  };

  const handleWatch = (id, redirect = true) => {
    setVideoId(id);
    if (redirect) history.push(`/watch?v=${id}`);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <div className={classes.content}>
        <Switch>
          <Route
            path="/watch"
            render={(props) => (
              <Watch
                {...props}
                handleWatch={handleWatch}
                isLoading={isLoading}
                videoId={videoId}
                video={video}
              />
            )}
          />
          <Route
            path="/search"
            render={(props) => (
              <Search
                {...props}
                handleSearch={handleSearch}
                handleWatch={handleWatch}
                isSearching={isSearching}
                query={query}
                results={results}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
