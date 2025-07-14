import * as z from 'zod';

export const getOneParamsSchema = z.object({
  id: z.string(),
});

export const getOneQuerySchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
});

export const createOneBodySchema = z.object({
  name: z.string(),
});

export const updateOneBodySchema = z.object({
  name: z.string(),
});
