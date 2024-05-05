import { z } from 'zod';

export const basicFormSchema = z.object({
  swagger: z.string({ required_error: 'OpenAPI is required' }),
  title: z
    .string()
    .min(10, {
      message: 'Title must be at least 10 characters.',
    })
    .max(20, {
      message: 'Title maximal 20 characters.',
    }),
  description: z
    .string()
    .max(255, {
      message: 'Description maximal 255 characters.',
    })
    .optional(),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, {
    message: 'Version must be format like: x.x.x',
  }),
  license: z.object({
    name: z.string({ required_error: 'License Name is required' }),
    url: z.string().url({ message: 'License URL is required' }),
  }),
  tags: z.array(
    z.object({
      name: z
        .string()
        .min(2, { message: 'Tag must be at least 2 characters' })
        .max(10, {
          message: 'Tag maximal 10 characters.',
        }),
      desc: z
        .string()
        .max(50, { message: 'Tag desc mximal 50 characters' })
        .optional(),
    })
  ),
  api: z.string().url({ message: 'API URL is required' }),
});

export const pathFormSchema = z.object({
  paths: z.array(
    z.object({
      method: z
        .array(z.string())
        .refine((value) => value.some((item) => item), {
          message: 'You have to select at least one item.',
        }),
      endpoint: z.string({ required_error: 'Endpoint required' }),
    })
  ),
});
