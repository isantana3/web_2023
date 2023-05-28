import axios from "axios";

export const api = axios.create({
  baseURL: "https://henriqueserra.com.br/sgl-uesc/api/v1",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
