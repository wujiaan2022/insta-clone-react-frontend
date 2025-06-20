import axios from "axios";

// We define the base URL of our backend API.
export const api = axios.create({
  baseURL: "http://localhost:3000", // Your Fastify backend address
});