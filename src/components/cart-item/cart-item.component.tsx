import "./cart-item.style";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.style";
import { CartItem as CartItemType } from "../../store/cart/cart.types";
import { FC, memo } from "react";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <img style={{ width: "30%" }} src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
