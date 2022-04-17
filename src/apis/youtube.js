import axios from "axios";

// const KEY -> זה רק משתנה שהוא קבוע ואשתמש בו בכל פעם 
const KEY = "AIzaSyCz4Cqd-lyOf-eTpdFeBibGRQWg1HgGD6o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});