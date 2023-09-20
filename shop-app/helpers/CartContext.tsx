import { ProductType } from '@/types';
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

type Cart = Array<{
  product: ProductType;
  qty: number;
}>;

type CartContextType = {
  cart: Cart;
  addProductToCart: (product: ProductType, qty: number) => void;
  removeProductFromCart: (productId: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<Cart>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateLocalStorage = (value: Cart) => {
    localStorage.setItem('cart', JSON.stringify(value));
  };

  const removeProductFromCart = (productId: string) => {
    const newCart = cart.filter(item => item.product.id !== productId)
    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const addProductToCart = (product: ProductType, qty: number) => {
    const currentItem = cart.find((item) => item.product.id === product.id);
    if (!currentItem) {
      const newCart = [...cart, { product, qty }];
      setCart(newCart);
      updateLocalStorage(newCart);
    } else {
      const newCart = [
        ...cart.filter((item) => item.product.id !== product.id),
        { product, qty: qty + currentItem.qty },
      ];
      setCart(newCart);
      updateLocalStorage(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
