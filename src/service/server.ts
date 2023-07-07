import axios from "axios";
import { toast } from "react-toastify";

import { helpers } from "utils/helpers";

export const api = axios.create({
  baseURL: "https://henriqueserra.com.br/sgl-uesc/api/v1",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");

  if (token) {
    if (helpers.validToken()) {
      config.headers.Authorization = `Bearer ${token}`;
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
