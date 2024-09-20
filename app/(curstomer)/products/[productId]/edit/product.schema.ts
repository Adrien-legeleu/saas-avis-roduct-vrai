import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string(),
  noteText: z.string().optional().nullable(),
  informtionText: z.string().optional().nullable(),
  reviexText: z.string().optional().nullable(),
  thanksText: z.string().optional().nullable(),
  backgroundColor: z.string().optional().nullable(),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const GRADIENTS = [
  "bg-gradient-to-r from-violet-500 to-purple-500",
  "bg-gradient-to-r from-rose-400 to-red-500",
  "bg-gradient-to-r from-lime-400 to-lime-500",
  "bg-gradient-to-r from-teal-200 to-teal-500",
];
