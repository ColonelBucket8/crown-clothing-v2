import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const handleRightArrowClick = () => addItemToCart(cartItem);
  const handleLeftArrowClick = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={handleLeftArrowClick}>
          &#8592;
        </span>
        <span>{quantity}</span>
        <span className="arrow" onClick={handleRightArrowClick}>
          &#8594;
        </span>
      </div>
      <span className="price">{price}</span>
    </div>
  );
};

export default CheckoutItem;
