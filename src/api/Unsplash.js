import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID co6PACAwP5crnmWZ_1_oAXd8Yy05Cc6Ul8lR1EF27wQ",
  },
});
