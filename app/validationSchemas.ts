import {z} from "zod";

export const patchUserSchemas = z.object({
    name:z.string().min(5, "Name must be at least 5 characters long").max(255).optional(),
    location: z.string().max(255),
    bio:z.string().max(255).optional().nullable(),
    pronouns:z.string().min(1, "Pronouns is required").max(255).optional().nullable(),
});

export const postReviewSchema = z.object({
    id:z.string().optional(),
    rating:z.number().min(1, "Rating must be between 1 and 5").max(5).optional(),
    body:z.string().min(20, 'Body is required').max(65535).optional(),
    title:z.string().min(5, "Title is required").max(255).optional(),
    userId:z.string().min(1, "UserId is required").max(255).optional(),
    movieId:z.string().min(1, "MovieId is required").max(255).optional(),
});
