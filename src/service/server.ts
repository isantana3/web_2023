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

// Função para buscar o token CSRF
async function fetchCsrfTokenIfNeeded() {
  if (!csrfToken) {
    try {
      const response = await api.get("https://sgl-uesc-backend.onrender.com/api/v1/authentications/csrf-token", { withCredentials: true });
      csrfToken = response.data.csrfToken; // Armazena o Xsrf-Token vindo do JSON
      // Extrai o _csrf token do header Set-Cookie
      const cookies = response.headers["set-cookie"];
      if (cookies) {
        const csrfCookie = cookies.find(cookie => cookie.startsWith("_csrf"));
        if (csrfCookie) {
          csrf = csrfCookie.split(";")[0].split("=")[1];
        }
      }
    } catch (error) {
      console.error("Erro ao obter o token CSRF", error);
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
  config.headers["Cookie"] = `Xsrf-Token=${csrfToken}; _csrf=${csrf}`;

  return config;
});

// Interceptor de resposta para lidar com erros
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      toast.error("Sistema indisponível");
    }
    // Caso o erro seja por token CSRF inválido, tentar buscar um novo token
    if (error.response && error.response.status === 403 && error.response.data.message === "invalid csrf token") {
      csrfToken = ""; // Limpa o token CSRF para buscar novamente na próxima requisição
      csrf = "";
      await fetchCsrfTokenIfNeeded(); // Atualiza o token CSRF
    }
    return Promise.reject(error);
  }
);

function logout() {
  localStorage.setItem("token", "");
  localStorage.setItem("userData", "");
  window.location.replace(window.location.origin);
}
