import React, { useEffect } from "react";
import queryString from "query-string";

export default function Watch({ history, location }) {
  const { v: videoId } = queryString.parse(location.search);
  if (!videoId) history.replace("/");

  useEffect(() => {
    console.log(`Watching ${videoId}`);
  });

  return <div>Watch</div>;
}
