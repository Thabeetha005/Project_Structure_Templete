import axios from "axios";

/**
 * Pre-configured axios instance used by every feature's api/ folder.
 * Attaches the JWT automatically and centralizes base URL / error handling.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      // Optionally redirect to /login here.
    }
    return Promise.reject(error);
  }
);
