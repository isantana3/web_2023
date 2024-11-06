import axios from "axios";
import { toast } from "react-toastify";
import { helpers } from "utils/helpers";

export const api = axios.create({
  baseURL: "https://sgl-uesc-backend.onrender.com/api/v1",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Habilita envio de cookies nas requisições
api.defaults.withCredentials = true;

// Interceptor para adicionar o token CSRF e autorização às requisições
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");

  if (token) {
    if (helpers.validToken()) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      logout();
    }
  }

  const csrfToken = document.cookie
  .split('; ')
  .find((row) => row.startsWith('XSRF-TOKEN='))
  ?.split('=')[1];

  if (csrfToken) {
    config.headers['X-Csrf-Token'] = csrfToken;
  }
  return config;
});

function logout() {
  localStorage.setItem("token", "");
  localStorage.setItem("userData", "");
  window.location.replace(window.location.origin);
}
