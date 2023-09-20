import { colors } from '@/helpers/colors';
import { GET_TYPES } from '@/helpers/grapql-queries';
import { fetchTypes } from '@/helpers/productsApi';
import { useQuery } from '@apollo/client';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
  checkedTypes: string[];
  setCheckedTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

export const FilterByTypes = ({ checkedTypes, setCheckedTypes }: Props) => {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const { loading, error, data: typesArray } = useQuery(GET_TYPES);

  const handleClick = async () => {
    setIsShowFilter(!isShowFilter);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsShowFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterRef]);

  const handleChange = (type: string, isChecked: boolean) => {
    const otherCheckedTypes = checkedTypes.filter(
      (checkedType) => checkedType !== type
    );
    setCheckedTypes(
      isChecked ? [...otherCheckedTypes, type] : otherCheckedTypes
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div ref={filterRef}>
      <FilterTextContainer onClick={handleClick}>
        <FontAwesomeIcon
          icon={faFilter}
          style={{ width: 18, paddingRight: 10 }}
        />
        Filter
      </FilterTextContainer>
      {isShowFilter ? (
        <TypesContainer>
          {typesArray.map((type: string) => (
            <TypeLabel key={type}>
              <Checkbox
                type="checkbox"
                checked={checkedTypes.includes(type)}
                onChange={(event) => handleChange(type, event.target.checked)}
                value={type}
              />
              {type}
            </TypeLabel>
          ))}
        </TypesContainer>
      ) : null}
    </div>
  );
};

const FilterTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  color: ${colors.darkBrown};
  cursor: pointer;

  &:hover {
    color: ${colors.dark};
  }
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 150px;
  width: 100%;
  position: absolute;
  right: 0;
  top: 40px;
  background-color: ${colors.light};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px -5px;
`;

const TypeLabel = styled.label`
  display: flex;
  flex-direction: row;
  max-width: 150px;
  width: 100%;
  align-items: center;
  font-family: inherit;
`;

const Checkbox = styled.input`
  margin: 7px;
`;
