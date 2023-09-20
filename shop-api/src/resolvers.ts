import { randomUUID } from 'crypto';
import { PRODUCTS } from './data/products';

export const resolvers = {
  Query: {
    products: (_, {input: {searchQuery, types, offset, limit}}) => {
      const results = PRODUCTS.filter(
        (product) => 
        !searchQuery || product.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      ).filter(
        ({type}) => !types || types.length === 0 || types.includes(type)
      );

      const paginatedResults = results.slice(offset, offset + limit);
      return { count: results.length, products: paginatedResults };
    },
    product: (_, { id }) => PRODUCTS.find(product => product.id === id),
    types: () => PRODUCTS.map(product => product.type)
  },
  Mutation: {
    createNewProduct: ({name, storage, type}) => {
        const id = `${randomUUID}`
        return PRODUCTS.push({id: id, name: name, storage: storage, type: type})
    }
  }
};

