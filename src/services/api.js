import axios from "axios";

const api = axios.create({
  baseURL: "https://notifica-diario.fly.dev",
});

export async function createUser(info) {
  const response = await api.post("/users", {
    email: info.email,
    name: info.name,
    keywords: info.keywords,
  });

  return response.data;
}

export async function forgetUser(token) {
  const response = await api.post(`/unsubscribe/${token}`);

  return response.data;
}

export default api;
