import axios from "axios";
import { toast } from "react-toastify";
import { helpers } from "utils/helpers";

export const api = axios.create({
  baseURL: "https://sgl-uesc-backend.onrender.com/api/v1",
  // baseURL: "http://localhost:3333/api/v1",
  timeout: 5000,
  headers: {
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

// Função para obter e adicionar o token CSRF a cada requisição
async function getAndSetCsrfToken(config: any) {
  await fetchCsrfToken(); // Pede um novo token CSRF
  config.headers['XSRF-TOKEN'] = csrfToken; // Adiciona o novo token ao cabeçalho da requisição
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

  // Obtenha e adicione o token CSRF antes de prosseguir com a requisição
  await getAndSetCsrfToken(config);

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

function logout(): void {
  localStorage.setItem("token", "");
  localStorage.setItem("userData", "");
  window.location.replace(window.location.origin);
}

