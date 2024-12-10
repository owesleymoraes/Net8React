import { z } from "zod";

export const formLoginSchema = z.object({
  email: z.string().min(1, { message: "Email obrigatório" }),
  password: z.string().min(1, { message: "Senha obrigatório" }),
});
