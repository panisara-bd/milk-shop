import React, { useEffect, useState } from "react";
import { Product, ProductType } from "@/types";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/helpers/grapql-queries";
import { ProductCard } from "@/components/ProductCard";
import styled from "styled-components";
import { colors } from "@/helpers/colors";
import { Pagination } from "@/components/Pagination";

const LIMIT = 9;

type Props = {
  searchQuery: string
  checkedTypes: ProductType[]
}

const useDebouncedAction = (action: () => void, searchQuery: string) => {
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (searchQuery === '') {
      action();
      return;
    }

    const timeout = setTimeout(action, 500);
    setDebounceTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
};

export const SearchResult: React.FC<Props> = ({ searchQuery, checkedTypes }) => {
  const [queryVariables, setQueryVariables] = useState<{
    searchQuery: string,
    types: string[],
    limit: number,
    offset: number,
  }>({
    searchQuery: '',
    types: [],
    limit: LIMIT,
    offset: 0,
  })

  useEffect(() => {
    setQueryVariables((prevState) => ({
      ...prevState,
      types: checkedTypes.map(type => type.id),
      offset: 0,
    }))
  }, [checkedTypes]);

  useDebouncedAction(() => {
    setQueryVariables(prevState => ({
      ...prevState,
      searchQuery,
      offset: 0,
    }))
  }, searchQuery)

  const setOffset = (offset: number) => setQueryVariables(previousQueryVariables => ({
    ...previousQueryVariables,
    offset,
  }))

  const { loading, error, data: productsResult } = useQuery(GET_PRODUCTS, {
    variables: queryVariables
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  const { products, count } = productsResult.products

  return (
    <>
      <ProductsCount>{count} products</ProductsCount>
      <CardsContainer>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} id={product.id} />
        ))}
      </CardsContainer>
      <Pagination
        count={count}
        limit={LIMIT}
        setOffset={setOffset}
        offset={queryVariables.offset}
      />
    </>
  );
}

const CardsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 47px;
`;

const ProductsCount = styled.p`
  color: ${colors.darkBrown};
  padding-left: 10px;
`;
