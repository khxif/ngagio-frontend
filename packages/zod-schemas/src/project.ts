import z from 'zod';

export const projectsSchema = z.object({
  name: z.string().min(2, 'Enter a valid name'),
});
export type ProjectsSchemaType = z.infer<typeof projectsSchema>;
