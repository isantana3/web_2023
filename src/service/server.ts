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

let csrfToken = ""; // Armazena o token Xsrf-Token
let csrf = ""; // Armazena o token _csrf
let isFetchingCsrfToken = false; // Controla o estado da requisição de token CSRF

// Função para buscar o token CSRF
async function fetchCsrfTokenIfNeeded() {
  if (!csrfToken && !isFetchingCsrfToken) { // Evita chamadas simultâneas
    isFetchingCsrfToken = true;
    try {
      const response = await api.get("/authentications/csrf-token", { withCredentials: true });
      csrfToken = response.data.csrfToken; // Armazena o Xsrf-Token vindo do JSON
    } catch (error) {
      console.error("Erro ao obter o token CSRF", error);
    } finally {
      isFetchingCsrfToken = false;
    }
  }
}

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

  await fetchCsrfTokenIfNeeded(); // Obtém os tokens CSRF, se ainda não estiverem carregados

  // Adiciona os tokens CSRF aos headers
  config.headers["Xsrf-Token"] = csrfToken;

  return config;
});

// Interceptor de resposta para lidar com erros
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      toast.error("Sistema indisponível");
    }

    // Limita a atualização do token CSRF a uma única vez por requisição
    if (
      error.response &&
      error.response.status === 403 &&
      error.response.data.message === "invalid csrf token" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Marca a requisição como já tentada uma vez

      csrfToken = ""; // Limpa o token CSRF para buscar novamente na próxima requisição
      csrf = "";
      await fetchCsrfTokenIfNeeded(); // Atualiza o token CSRF

      // Refaz a requisição original com o novo token
      return api.request(originalRequest);
    }

    return Promise.reject(error);
  }
);

function logout() {
  localStorage.setItem("token", "");
  localStorage.setItem("userData", "");
  window.location.replace(window.location.origin);
}
