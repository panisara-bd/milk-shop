import { colors } from '@/helpers/colors';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <SearchBoxContainer>
      <SearchIcon>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: 20 }} />
      </SearchIcon>
      <SearchBoxInput
        type="search"
        placeholder="Search milk name"
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
      />
    </SearchBoxContainer>
  );
};

const SearchBoxContainer = styled.div`
  display: block;
  position: relative;
  max-width: 900px;
  width: 100%;
`;

const SearchIcon = styled.div`
  position: absolute;
  padding: 10px 0 0 12px;
`;

const SearchBoxInput = styled.input`
  border: none;
  padding: 10px;
  border-radius: 20px;
  padding-left: 40px;
  width: 400px;
  font-size: 16px;
  background: #fff;
  border: 2px solid ${colors.lightBrown};

  &:hover {
    border: 2px solid ${colors.dark};
  }

  @media (max-width: 530px) {
    width: 250px;
  }
`;
