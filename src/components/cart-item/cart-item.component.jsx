import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
