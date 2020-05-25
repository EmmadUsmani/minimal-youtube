import Axios from "axios";

const key = "AIzaSyD8eHtwlHkLxiivOycFs4gbKWZNCELO1fw";
Axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";

export async function search(query) {
  const response = await Axios.get("/search", {
    params: {
      part: "snippet",
      type: "video",
      maxResults: 10,
      q: query,
      key,
    },
  });
  return response.data.items;
}

export async function watch(videoId) {
  const response = await Axios.get("/videos", {
    params: {
      part: "snippet, statistics",
      id: videoId,
      key,
    },
  });
  return response.data.items[0];
}

export default { search, watch };
