import axios from "axios";

const KEY = "AIzaSyCup83ZwONoz-ojLs97wu3_g1ogPXtAFVo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
