import styled from 'styled-components';
import { colors } from '../helpers/colors';
import { SearchBar } from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { ProductType } from '@/types';
import { ProductCard } from '@/components/ProductCard';
import { FilterByTypes } from '@/components/FilterByTypes';
import { Pagination } from '@/components/Pagination';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/helpers/grapql-queries';

const LIMIT = 9;

const useDebouncedSearch = (fetchFn: () => void, searchQuery: string) => {
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (searchQuery === '') {
      fetchFn();
      return;
    }

    const timeout = setTimeout(fetchFn, 500);
    setDebounceTimeout(timeout);
  }, [searchQuery]);
};


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedTypes, setCheckedTypes] = useState<string[]>([]);
  const [offset, setOffset] = useState(0);
  
  const queryVariables = {
    variables: { searchQuery: searchQuery, types: checkedTypes, limit: LIMIT, offset: offset },
  };

  const { loading, error, data: productsResult, refetch } = useQuery(GET_PRODUCTS, queryVariables);
  
  useDebouncedSearch(refetch, searchQuery);

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  const { products, count } = productsResult.products
  return (
    <ContentWraper>
      <SubHeader>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterByTypes
          checkedTypes={checkedTypes}
          setCheckedTypes={setCheckedTypes}
        />
      </SubHeader>
      {searchQuery !== '' || checkedTypes.length ? (
        <ResultChipsContainer>
          Results for{' '}
          {searchQuery !== '' && <SearchQuery>{searchQuery}</SearchQuery>}
          {checkedTypes.map((type) => (
            <SearchQuery isFilter key={type}>
              {type}
            </SearchQuery>
          ))}
        </ResultChipsContainer>
      ) : null}
      <ProductsCount>{count} products</ProductsCount>
      <CardsContainer>
        {products.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} id={product.id} />
        ))}
      </CardsContainer>
      <Pagination
        count={count}
        limit={LIMIT}
        setOffset={setOffset}
        offset={offset}
      />
    </ContentWraper>
  );
}

const ContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin-inline: 30px;
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  gap: 30px;
  margin-inline: 20px;
`;

const CardsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 47px;
`;

const ResultChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  padding-bottom: 0;
  font-weight: 600;
  color: ${colors.dark};
`;

const SearchQuery = styled.span<{ isFilter?: boolean }>`
  background: ${(props) =>
    props.isFilter ? 'rgba(0,0,0,0.1)' : 'rgba(255, 255, 255, 0.2)'};
  padding: 5px 15px;
  border-radius: 20px;
`;

const ProductsCount = styled.p`
  color: ${colors.darkBrown};
  padding-left: 10px;
`;
