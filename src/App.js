import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Paper } from "@material-ui/core";
import {
  responsiveFontSizes,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Footer from "./components/Footer";
import useFetchResults from "./hooks/useFetchResults";
import useFetchVideo from "./hooks/useFetchVideo";

// TODO: different card for small screens
// TODO: connect youtube api

const themeObj = {
  palette: {
    primary: {
      main: "#5e35b1",
    },
  },
  breakpoints: {
    md: 860,
    lg: 1220,
  },
};

const useStyles = makeStyles((theme) => ({
  page: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "70%",
    margin: "auto",
    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      maxWidth: 600,
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: 860,
      width: "60%",
    },
  },
  content: {
    marginTop: 20,
    paddingBottom: 50,
  },
}));

export default function App() {
  const classes = useStyles();
  const history = useHistory();

  const [isDark, setIsDark] = useState(false);
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

  const handleToggleDark = () => {
    setIsDark(!isDark);
  };

  const theme = responsiveFontSizes(
    createMuiTheme({
      ...themeObj,
      palette: {
        ...themeObj.palette,
        type: isDark ? "dark" : "light",
      },
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper square>
        <div className={classes.page}>
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
          <Footer handleToggleDark={handleToggleDark} isDark={isDark} />
        </div>
      </Paper>
    </ThemeProvider>
  );
}
