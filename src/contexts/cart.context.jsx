import { useEffect, useState, createContext } from 'react';

const cartItemsToReturn = (productToAdd, cartItem) => {
  return cartItem.id === productToAdd.id
    ? {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      }
    : cartItem;
};

const cartItemsToRemove = (cartItem, productToRemove) => {
  return cartItem.id === productToRemove.id
    ? {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      }
    : cartItem;
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItemsToReturn(productToAdd, cartItem)
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const cartItemToRemove = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItemsToRemove(cartItem, productToRemove)
  );
};

export const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  removeCartItem: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToRemove) => {
    const removedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productToRemove.id
    );

    setCartItems(removedCartItems);
  };

  const value = {
    showCart,
    setShowCart,
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
