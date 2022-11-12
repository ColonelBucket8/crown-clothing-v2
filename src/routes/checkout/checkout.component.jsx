import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout page</h1>
      {cartItems.map((cartItem) => {
        const { name, quantity, id } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span>decrement</span>
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
