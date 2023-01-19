import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

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
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setShowCart: () => {},
  addItemToCart: () => {},
  removeCartItem: () => {},
  clearItemFromCart: () => {},
});

export const CART_ACTION_TYPES = {
  SET_SHOW_CART: 'SET_SHOW_CART',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// Don't do business logic inside the reducer
// This makes it less readable and bloated
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_SHOW_CART:
      return {
        ...state,
        showCart: payload,
      };
    case CART_ACTION_TYPES.SET_CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { showCart, cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const payloadToDispatch = {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payloadToDispatch));
  };

  const addItemToCart = (productToAdd) => {
    updateCartItemsReducer(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    updateCartItemsReducer(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToRemove) => {
    const removedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productToRemove.id
    );

    updateCartItemsReducer(removedCartItems);
  };

  const setShowCart = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_SHOW_CART, bool));
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
