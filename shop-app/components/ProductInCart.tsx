import { useCartContext } from '@/helpers/CartContext';
import { colors } from '@/helpers/colors';
import { HOST } from '@/helpers/grapql-queries';
import { ProductType } from '@/types';
import styled from 'styled-components';

type Props = {
  product: ProductType;
  qty: number;
};

export const ProductInCart = ({ product, qty }: Props) => {
  const { removeProductFromCart } = useCartContext();
  return (
    <Container>
      <ProductImageContainer>
        <ProductImage src={`${HOST}/${product.image}`} />
      </ProductImageContainer>
      <ProductDetails>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductType>{product.type}</ProductType>
        <ProductQty>{qty} liters</ProductQty>
        <RemoveItemButton
          type="button"
          onClick={() => removeProductFromCart(product.id)}
        >
          Remove
        </RemoveItemButton>
      </ProductDetails>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductDetails = styled.div`
  margin-left: 16px;
`;

const ProductTitle = styled.h5`
  margin: 0;
  font-size: 1em;
`;

const ProductImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${colors.darkBrown};
  border-radius: 4px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
`;

const ProductType = styled.p`
  margin: 0;
  color: ${colors.grey};
  font-size: 0.9em;
`;

const ProductQty = styled.p`
  margin: 0;
  color: ${colors.brownIsh};
  font-size: 0.9em;
`;

const RemoveItemButton = styled.button`
  border: 0;
  padding: 8px 12px;
  margin-top: 10px;
  background-color: ${colors.lightBrown};
  color: ${colors.dark};
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.dark};
  }
`;
