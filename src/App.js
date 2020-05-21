import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Footer from "./components/Footer";
import useFetchResults from "./hooks/useFetchResults";

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
  const [isLoading, results] = useFetchResults(query);

  const handleQueryChange = (input) => {
    if (input) {
      setQuery(input);
      history.push(`/search`);
    }
  };

  return (
    <>
      <SearchBar handleQueryChange={handleQueryChange} />
      <div className={classes.content}>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route
            path="/search"
            render={(props) => (
              <Search {...props} isLoading={isLoading} results={results} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
