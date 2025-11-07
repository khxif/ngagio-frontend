import z from 'zod';

export const feedbackSchema = z.object({
  email: z.email('Enter a valid email address'),
  message: z.string().min(6, 'Enter a valid message'),
  rating: z.number().min(1, 'Select a rating'),
});
export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;
