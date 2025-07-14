import type { Request, Response } from 'express';
import {
  createOneBodySchema,
  getOneParamsSchema,
  getOneQuerySchema,
  updateOneBodySchema,
} from './entity.schema';
import * as entityService from './entity.service';

export async function getOne(req: Request, res: Response) {
  const { id } = getOneParamsSchema.parse(req.params);

  const data = await entityService.getOne(id);

  if (!data) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  res.json(data);
}

export async function getAll(req: Request, res: Response) {
  const { page, limit } = getOneQuerySchema.parse(req.query);

  const data = await entityService.getAll({ page, limit });
  const totalItems = await entityService.getCount();

  res.json({
    data,
    pagination: {
      totalItems,
      page,
      limit,
    },
  });
}

export async function createOne(req: Request, res: Response) {
  const input = createOneBodySchema.parse(req.body);

  const data = await entityService.createOne(input);

  res.json(data);
}

export async function updateOne(req: Request, res: Response) {
  const { id } = getOneParamsSchema.parse(req.params);
  const input = updateOneBodySchema.parse(req.body);

  const data = await entityService.updateOne(id, input);

  if (!data) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  res.json(data);
}

export async function deleteOne(req: Request, res: Response) {
  const { id } = getOneParamsSchema.parse(req.params);

  const data = await entityService.deleteOne(id);

  if (!data) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  res.json(data);
}
