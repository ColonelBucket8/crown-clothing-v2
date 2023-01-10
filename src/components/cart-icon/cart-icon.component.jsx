import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style';

import './cart-icon.style';

const CartIcon = () => {
  const { showCart, setShowCart, cartCount } = useContext(CartContext);

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <CartIconContainer onClick={toggleShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
