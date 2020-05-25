import Axios from "axios";

const key = "AIzaSyD8eHtwlHkLxiivOycFs4gbKWZNCELO1fw";
Axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";

export async function search(query) {
  const response = await Axios.get("/search", {
    params: {
      part: "snippet",
      maxResults: 10,
      type: "video",
      q: query,
      key,
    },
  });
  return response.data.items;
}

export default { search };
