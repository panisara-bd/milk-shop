import { Prisma, PrismaClient } from "@prisma/client";
import { SearchInput } from "./schema";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    products: async (_, { input: { searchQuery, types, offset, limit } }: { input: SearchInput }) => {
      const where: Prisma.ProductWhereInput = {
        ...(searchQuery ? { name: { contains: searchQuery, mode: 'insensitive' } } : {}),
        ...(types && types.length > 0 ? { typeId: { in: types } } : {}),
      }

      const [count, products] = await prisma.$transaction([
        prisma.product.count({ where }),
        prisma.product.findMany({
          where,
          include: { type: true },
          skip: offset,
          take: limit,
        })
      ])

      return { count, products };
    },
    product: (_, { id }) => prisma.product.findUnique({
      where: { id },
      include: { type: true }
    }),
    types: () => prisma.productType.findMany(),
  },
  Mutation: {
    // this mutation is a proof-of-concept and it's meant to be ran by an admin
    // it should be protected with an authentication strategy
    createNewProduct: async ({ name, storage, typeId }) => {
      return {
        product: await prisma.product.create({
        data: {
          name,
          storage,
          typeId
        }
      })
    }
    }
  }
};

