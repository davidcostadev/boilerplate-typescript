import type { NextFunction, Request, Response } from 'express';
import { ZodError, z } from 'zod';

export const zodErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('zodErrorMiddleware', err);
  }
  if (err instanceof ZodError) {
    res.status(400).json({
      error: 'Validation Error',
      issues: z.flattenError(err),
    });
  } else {
    next(err);
  }
};
