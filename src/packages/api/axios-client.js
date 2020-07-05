import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.statistico.io",
});

export default instance;
