import { z } from "zod";

export const formCreateStudentSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().min(1, { message: "Email é obrigatório" }),
  age: z.number().min(1, { message: "Idade é obrigatória" }),
});
