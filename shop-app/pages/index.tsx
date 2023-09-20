import styled from 'styled-components';
import { colors } from '@/helpers/colors';
import { SearchBar } from '@/components/SearchBar';
import { useState } from 'react';
import { FilterByTypes } from '@/components/FilterByTypes';
import { SearchResult } from "@/components/SearchResult";
import { ProductType } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedTypes, setCheckedTypes] = useState<ProductType[]>([]);

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
            <SearchQuery isFilter key={type.id}>
              {type.name}
            </SearchQuery>
          ))}
        </ResultChipsContainer>
      ) : null}
      <SearchResult
        searchQuery={searchQuery}
        checkedTypes={checkedTypes}
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
          props.isFilter ? 'rgba(0,0,0,0.1)' : '#ffffff'};
  padding: 5px 15px;
  border-radius: 20px;
`;

const ProductsCount = styled.p`
  color: ${colors.darkBrown};
  padding-left: 10px;
`;
