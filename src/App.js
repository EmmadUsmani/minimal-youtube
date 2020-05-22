import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Footer from "./components/Footer";
import useFetchResults from "./hooks/useFetchResults";
import useFetchVideo from "./hooks/useFetchVideo";

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

  const handleQuery = (input) => {
    if (input) {
      setQuery(input);
      history.push(`/search`);
    }
  };

  const handleVideo = (id) => {
    setVideoId(id);
    history.push(`/watch`);
  };

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
      <div className={classes.content}>
        <Switch>
          <Route
            path="/watch"
            render={(props) => (
              <Watch {...props} isLoading={isLoading} video={video} />
            )}
          />
          <Route
            path="/search"
            render={(props) => (
              <Search
                {...props}
                handleVideo={handleVideo}
                isSearching={isSearching}
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
