import {z} from "zod";

export const patchUserSchemas = z.object({
    name:z.string().min(5, "Name must be at least 5 characters long").max(255).optional(),
    location: z.string().max(255),
    bio:z.string().max(255).optional().nullable(),
    pronouns:z.string().min(1, "Pronouns is required").max(255).optional().nullable(),
});