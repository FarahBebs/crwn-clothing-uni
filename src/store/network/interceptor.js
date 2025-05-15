import axios from "axios";
import { store } from "../store";

export const API_BASE_URL = "http://localhost:3000";

axios.interceptors.request.use(
  (config) => {
    const token = store.getState()?.user?.tokens?.token;
    if (token) {
      config.headers
        ? (config.headers.Authorization = `Bearer ${token}`)
        : (config.headers = { Authorization: `Bearer ${token}` });
    }
    if (config.url && !config.url.startsWith("/")) {
      config.url = `/${config.url}`;
    }
    config.url = `${API_BASE_URL}${config.url}`;
    return config;
  }
);