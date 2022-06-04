import Button from "../button/button.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <span className="empty-message">Your cart is empty</span>
      <div className="cart-items" />
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
