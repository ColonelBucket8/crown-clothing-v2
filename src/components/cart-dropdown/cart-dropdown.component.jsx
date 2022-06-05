import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems, setShowCart } = useContext(CartContext);
  const handleClick = () => setShowCart(false);
  return (
    <div className="cart-dropdown-container">
      {cartItems.length === 0 && (
        <span className="empty-message">Your cart is empty</span>
      )}
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={handleClick}>CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
