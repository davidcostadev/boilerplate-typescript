import { Router } from 'express';
import { asyncErrorWrapper } from '../middleware/internalAsyncError.middleware';
import * as entityController from './entity.controller';

const router: Router = Router();

router.get('/', asyncErrorWrapper(entityController.getAll));
router.get('/:id', asyncErrorWrapper(entityController.getOne));
router.post('/', asyncErrorWrapper(entityController.createOne));
router.put('/:id', asyncErrorWrapper(entityController.updateOne));
router.delete('/:id', asyncErrorWrapper(entityController.deleteOne));

export { router as entityRoutes };
