// Importerar inloggningsfunktionen från auth-controller
import { login } from "./auth.js";

// Registrerar routes för autentisering
export async function authRoutes(fastify) {
  // POST /login används för att logga in användare
  fastify.post("/login", login);
}