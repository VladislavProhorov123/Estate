import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Minimum 2 characters"),

  email: z
    .email(),

  phone: z
    .string()
    .min(8),

  message: z
    .string()
    .min(10),
});

export type ContactForm = z.infer<typeof ContactSchema>;