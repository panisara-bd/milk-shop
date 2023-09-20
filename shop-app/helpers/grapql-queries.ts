import { gql } from '@apollo/client';
export const HOST = "http://localhost:4000/"
export const GET_PRODUCTS = gql`
  query ($searchQuery: String, $types: [String], $limit: Int, $offset: Int) {
    products(
      input: { searchQuery: $searchQuery, types: $types, limit: $limit, offset: $offset }
    ) {
      products {
        name
        type
        storage
        id
      }
      count
    }
  }
`;
export const GET_PRODUCT = gql`
  query ($id: String) {
    product(id: $id) {
      name
      type
      storage
      id
    }
  }
`;

export const GET_TYPES = gql`
  query {
    types
  }
`;
