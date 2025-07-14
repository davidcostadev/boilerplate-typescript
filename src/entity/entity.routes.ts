import { Router } from 'express';

import * as entityController from './entity.controller';
import { asyncErrorWrapper } from '../middleware/internalAsyncError.middleware';
import { zodErrorMiddleware } from '../middleware/zodError.middleware';

const router: Router = Router();

router.use(zodErrorMiddleware);

router.get('/', asyncErrorWrapper(entityController.getAll));
router.get('/:id', asyncErrorWrapper(entityController.getOne));
router.post('/', asyncErrorWrapper(entityController.createOne));
router.put('/:id', asyncErrorWrapper(entityController.updateOne));
router.delete('/:id', asyncErrorWrapper(entityController.deleteOne));

export { router as entityRoutes };
