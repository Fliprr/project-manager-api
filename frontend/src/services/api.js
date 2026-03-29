import axios from "axios";

export const api = axios.create({
  baseURL: "https://project-manager-api-f1c4.onrender.com",
});

export default api;