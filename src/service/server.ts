import axios from "axios";
import { toast } from "react-toastify";
import { helpers } from "utils/helpers";

export const api = axios.create({
  baseURL: "https://sgl-uesc-backend.onrender.com/api/v1",
  // baseURL: "http://localhost:3333/api/v1",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Adicionando suporte para cookies
axios.defaults.withCredentials = true; // Isso permite que cookies sejam enviados com as requisições

function logout(): void {
  localStorage.setItem("token", "");
  localStorage.setItem("userData", "");
  window.location.replace(window.location.origin);
}

api.interceptors.request.use(async (config) => {
  // Obtém o token de autenticação
  const token = localStorage.getItem("token");

  if (token) {
    if (helpers.validToken()) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      logout();
    }
  }

  // Obtém o valor do cookie XSRF-TOKEN
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];

  // Adiciona o token CSRF no cabeçalho da requisição, se existir
  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = csrfToken;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      toast.error("Sistema indisponível");
    }
    return await Promise.reject(error);
  }
);
