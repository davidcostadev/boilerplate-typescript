// generated middleware that will handle internal errors

import type { NextFunction, Request, Response } from 'express';

export const asyncErrorWrapper = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.log('asyncErrorWrapper', err);
      res.status(500).json({ error: 'Internal Error' });
    }
  };
};
