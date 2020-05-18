import React from "react";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const history = useHistory();

  return (
    <div
      onClick={() => {
        history.push("/search");
      }}
    >
      SearchBar
    </div>
  );
}

export default SearchBar;
