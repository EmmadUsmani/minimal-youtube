import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Paper, useMediaQuery } from "@material-ui/core";
import {
  responsiveFontSizes,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import SearchBar from "./components/common/SearchBar";
import Footer from "./components/common/Footer";
import Search from "./components/search/Search";
import Watch from "./components/watch/Watch";
import useFetchResults from "./hooks/useFetchResults";
import useFetchVideo from "./hooks/useFetchVideo";
import useDarkMode from "./hooks/useDarkMode";

const themeObj = {
  palette: {
    primary: {
      main: "#BB86FC", // purple
    },
  },
  breakpoints: {
    sm: 550,
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

  const [query, setQuery] = useState("");
  const [videoId, setVideoId] = useState("");
  const [isSearching, results] = useFetchResults(query);
  const [isLoading, video] = useFetchVideo(videoId);
  const [isDark, setIsDark] = useDarkMode(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  themeObj.palette.type = isDark ? "dark" : "light";
  themeObj.palette.primary.main = isDark ? "#BB86FC" : "#994AF1";
  const theme = responsiveFontSizes(createMuiTheme(themeObj));

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
    localStorage.setItem("isDark", !isDark);
  };

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
                    isDark={isDark}
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
