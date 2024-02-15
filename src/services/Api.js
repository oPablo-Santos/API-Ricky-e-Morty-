import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/?page=19",
});

export default api;
