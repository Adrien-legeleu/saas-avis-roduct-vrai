// src/lib/safe-action.ts
import { createSafeActionClient } from "next-safe-action";

// Crée un client d'action sécurisé de base
export const actionClient = createSafeActionClient({
  // Gestion des erreurs du serveur
  handleServerError: (error: Error) => {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unexpected error occurred";
  },
});
