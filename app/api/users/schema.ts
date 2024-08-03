import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
})

export const productSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    stock: z.number(),
    image: z.string(),
})

