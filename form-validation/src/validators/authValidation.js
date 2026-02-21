import { z } from "zod"

export const registerSchema = z.object({
    username: z.string().min(4, "Minimum length must be 4"),
    email: z.email(),
    password: z.string().min(6, "Minimum 6 password need")
})

