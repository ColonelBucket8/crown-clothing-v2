import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.style';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setShowCart } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setShowCart(false));
  };

  const doCartItemsExist = cartItems.length !== 0;

  return (
    <CartDropdownContainer>
      <CartItems>
        {doCartItemsExist ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
