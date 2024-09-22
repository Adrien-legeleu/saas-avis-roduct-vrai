// src/app/products-actions.ts
"use server";

import { z } from "zod";
import { actionClient } from "@/lib/safe-action"; // Client d'action
import { userAction } from "@/lib/user-action"; // Action pour vérifier l'utilisateur

// Schéma de validation des données de produit
const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  backgroundColor: z.string().min(1, "Background color is required"),
});

// Action pour créer un produit
export const createProductAction = actionClient
  .schema(productSchema)
  .action(async ({ parsedInput }) => {
    // Utiliser userAction pour vérifier si l'utilisateur est authentifié
    const user = await userAction({ username: parsedInput.username });

    if (!user) {
      throw new Error("You must be logged in to create a product");
    }

    // Logique de création de produit
    const newProduct = {
      name: parsedInput.name,
      backgroundColor: parsedInput.backgroundColor,
      userId: user.id, // Associer l'utilisateur au produit
    };

    // Simuler une création en base de données
    console.log("Product created successfully:", newProduct);

    return { success: true, product: newProduct };
  });

// Action pour modifier un produit
export const editProductAction = actionClient
  .schema(productSchema)
  .action(async ({ parsedInput }) => {
    // Vérification de l'utilisateur
    const user = await userAction({ username: parsedInput.username });

    if (!user) {
      throw new Error("You must be logged in to edit a product");
    }

    // Logique de modification de produit
    const updatedProduct = {
      name: parsedInput.name,
      backgroundColor: parsedInput.backgroundColor,
      userId: user.id,
    };

    // Simuler une mise à jour en base de données
    console.log("Product updated successfully:", updatedProduct);

    return { success: true, product: updatedProduct };
  });
