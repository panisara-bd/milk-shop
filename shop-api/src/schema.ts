export const schema = `#graphql
 type Product {
    name: String
    type: String
    storage: Int
    id: String
 }

 type ProductsResult {
    products: [Product]
    count: Int
 }

 input SearchInput {
    searchQuery: String
    types: [String]
    limit: Int
    offset: Int
 }

 type Query {
    products (input: SearchInput): ProductsResult
    product (id: String): Product
    types: [String]
 }

  input CreateNewProductInput {
    name: String
    type: String
    storage: Int
  }

  type CreateNewProductOutPut {
    product: Product
  }

  type Mutation {
    createNewProduct (input: CreateNewProductInput!): CreateNewProductOutPut
 }
`;
