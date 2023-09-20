import { colors } from '@/helpers/colors';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ProductInCart } from './ProductInCart';
import { useCartContext } from '@/helpers/CartContext';

const getCartSubtitle = (numberOfItems: number) => {
  if (numberOfItems === 0) return '0 items';
  if (numberOfItems === 1) return '1 item';
  return `${numberOfItems} items`;
};

export const Cart = () => {
  const { isCartOpen, setIsCartOpen, cart } = useCartContext();

  return (
    <>
      <CartButton onClick={() => setIsCartOpen(!isCartOpen)}>
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ width: 25, padding: 5 }}
        />
        {getCartSubtitle(cart.length)}
      </CartButton>
      {isCartOpen ? (
        <CartModal>
          <CloseCart onClick={() => setIsCartOpen(!isCartOpen)}>x</CloseCart>
          <h3>Cart</h3>
          {cart.map((cartItem) => (
            <ProductInCart
              key={cartItem.product.id}
              product={cartItem.product}
              qty={cartItem.qty}
            />
          ))}
          {cart.length > 0 && (
            <OrderButton type="button" onClick={() => console.log(cart)}>
              Order
            </OrderButton>
          )}
        </CartModal>
      ) : null}
    </>
  );
};

const CartButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 5px;
  border: none;
  background: ${colors.darkBrown};
  color: ${colors.light};
  cursor: pointer;
  font-weight: 700;
  position: relative;

  &:hover {
    color: ${colors.dark};
  }
`;

const CartModal = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  height: 100vh;
  padding-left: 20px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colors.light};
  z-index: 1;
`;

const CloseCart = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  align-self: flex-end;
  background-color: ${colors.darkBrown};
  border: none;

  &:hover {
    background-color: ${colors.dark};
    color: ${colors.darkBrown};
  }
`;

const OrderButton = styled.button`
  border: 0;
  padding-block: 12px;
  margin-top: 10px;
  margin-right: 20px;
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
