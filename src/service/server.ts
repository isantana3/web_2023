import axios from "axios";

import { helpers } from "utils/helpers";

export const api = axios.create({
  baseURL: "https://henriqueserra.com.br/sgl-uesc/api/v1",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");

  if (token !== "undefined") {
    if (helpers.validToken()) {
      config.headers.Authorization = `Bearer ${token as string}`;
    }
  }
  return config;
});
