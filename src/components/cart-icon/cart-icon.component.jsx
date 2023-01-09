import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from './cart-icon.style';

const CartIcon = () => {
  const { showCart, setShowCart, cartCount } = useContext(CartContext);

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <CartIconContainer onClick={toggleShowCart}>
      <ShoppingIconContainer>
        <ShoppingIcon className="shopping-icon" />
      </ShoppingIconContainer>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
