import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : "https://nexchat-tn4u.onrender.com/api",

  withCredentials: true,
});