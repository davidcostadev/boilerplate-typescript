import { type Prisma, prisma } from '../libs/prisma';

export async function getAll({
  where,
  orderBy,
  page,
  limit,
}: {
  where?: Prisma.EntityWhereInput;
  orderBy?: Prisma.EntityOrderByWithRelationInput;
  page?: number;
  limit?: number;
}) {
  const take = limit ?? 10;
  const skip = ((page ?? 1) - 1) * take;

  return await prisma.entity.findMany({
    where,
    orderBy: orderBy ?? {
      createdAt: 'desc',
    },
    take,
    skip,
  });
}

export async function getCount({
  where,
}: {
  where?: Prisma.EntityWhereInput;
} = {}) {
  return await prisma.entity.count({ where });
}

export async function getOne(id: string) {
  return await prisma.entity.findUnique({
    where: {
      id,
    },
  });
}

export async function createOne(input: Prisma.EntityCreateInput) {
  return await prisma.entity.create({
    data: input,
  });
}

export async function updateOne(id: string, input: Prisma.EntityUpdateInput) {
  return await prisma.entity.update({
    where: {
      id,
    },
    data: input,
  });
}

export async function deleteOne(id: string) {
  return await prisma.entity.delete({
    where: {
      id,
    },
  });
}
