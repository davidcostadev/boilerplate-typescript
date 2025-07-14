import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const asyncErrorWrapper = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async function InternalAsyncErrorWrapper(req: Request, res: Response, next: NextFunction) {
    try {
      await fn(req, res, next);
    } catch (err) {
      if (err instanceof ZodError) {
        next(err);
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('asyncErrorWrapper', err);
        }
        res.status(500).json({ error: 'Internal Error' });
      }
    }
  };
};
