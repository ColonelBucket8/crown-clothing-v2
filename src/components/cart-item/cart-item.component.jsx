import './cart-item.style';
import {
  CartItemContainer,
  ImageContainer,
  ItemDetails,
  Name,
} from './cart-item.style';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <img style={{ width: '30%' }} src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
