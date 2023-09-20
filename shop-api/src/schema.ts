export type SearchInput = {
  searchQuery?: string
  types?: [string]
  limit: number
  offset: number
}

export const schema = `#graphql
type Product {
    name: String
    type: ProductType
    storage: Int
    id: String
}

type ProductType {
    name: String
    id: String
}

type ProductsResult {
    products: [Product]
    count: Int
}

input SearchInput {
    searchQuery: String
    types: [String]
    limit: Int!
    offset: Int!
}

type Query {
    products (input: SearchInput): ProductsResult
    product (id: String): Product
    types: [ProductType]
}

input CreateNewProductInput {
    name: String
    type: String
    storage: Int
}

type CreateNewProductOutput {
    product: Product
}

type Mutation {
    createNewProduct (input: CreateNewProductInput!): CreateNewProductOutput
}
`;
