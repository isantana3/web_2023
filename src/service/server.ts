import axios from "axios";
import { toast } from "react-toastify";

import { helpers } from "utils/helpers";

export const api = axios.create({
  baseURL: "https://sgl-uesc-backend.onrender.com:3333/api/v1",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function logout(): void {
  localStorage.setItem("token", "");
  localStorage.setItem("userData", "");
  window.location.replace(window.location.origin);
}

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");

  if (token) {
    if (helpers.validToken()) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      logout();
    }
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      toast.error("Sistema indisponível");
    }
    return await Promise.reject(error);
  }
);
