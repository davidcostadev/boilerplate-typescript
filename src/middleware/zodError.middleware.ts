import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const zodErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('zodErrorMiddleware', err);
  if (err instanceof ZodError) {
    res.status(400).json({ error: err.message });
  } else {
    next(err);
  }
};
