import { type Request, type Response, Router } from 'express';
import { entityRoutes } from './entity/entity.routes';

const router: Router = Router();

router.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

router.use('/entities', entityRoutes);

export { router as apiRoutes };
