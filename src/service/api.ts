// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // change if backend port is different
});

export default api;
