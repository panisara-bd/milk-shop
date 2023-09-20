import { colors } from '@/helpers/colors';
import styled from 'styled-components';
import { Cart } from './Cart';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>The milk store</HeaderText>
      <Cart />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const HeaderText = styled.h1`
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.darkBrown};
  letter-spacing: 5px;
`;
