import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8085/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  console.log("INTERCEPTOR TOKEN:", token); 

  if (token && token.split(".").length === 3) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default api;
