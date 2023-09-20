import { colors } from '@/helpers/colors';
import React from 'react';
import styled from 'styled-components';

type Props = {
  count: number;
  limit: number;
  offset: number;
  setOffset: (offset: number) => void;
};

export const Pagination = ({ count, limit, setOffset, offset }: Props) => {
  const numberOfPages = Math.ceil(count / limit);
  const pages = new Array(numberOfPages).fill(0).map((_, index) => index + 1);

  const handlePageClick = (page: number) => {
    setOffset((page - 1) * limit);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <PaginationWrapper>
      {pages.map((page) => (
        <PageButton key={page} onClick={() => handlePageClick(page)} isActive={offset === (page - 1) * limit}>
          {page}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 50px;
  gap: 15px;
`;

const PageButton = styled.button<{isActive: boolean}>`
  background-color: ${colors.light};
  padding: 5px 12px;
  border: 2px solid ${props => props.isActive ? colors.dark : colors.light};
  border-radius: 5px;

  &:hover{
    border: 2px solid ${colors.dark};
  }
`