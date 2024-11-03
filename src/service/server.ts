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

let csrfToken = ''; // Variável para armazenar o token CSRF

// Função para obter o token CSRF
async function fetchCsrfToken() {
  try {
    const response = await axios.get("https://sgl-uesc-backend.onrender.com/api/v1/authentications/csrf-token", { withCredentials: true });
    csrfToken = response.data.csrfToken; // Armazenar o token CSRF
  } catch (error) {
    console.error("Erro ao obter o token CSRF", error);
  }
}

// Inicializar a aplicação e obter o token CSRF após o login ou no carregamento
async function initialize() {
  await fetchCsrfToken(); // Chame essa função após o login ou no carregamento
}

initialize();

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

  // Adicionando o token CSRF nos cabeçalhos das requisições
  if (csrfToken) {
    config.headers['XSRF-TOKEN'] = csrfToken; // O cabeçalho pode variar dependendo da configuração do backend
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
