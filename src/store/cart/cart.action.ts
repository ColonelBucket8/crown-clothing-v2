import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";

export type SetShowCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_SHOW_CART,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

const cartItemsToReturn = (productToAdd: CategoryItem, cartItem: CartItem) => {
  return cartItem.id === productToAdd.id
    ? {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      }
    : cartItem;
};

const cartItemsToRemove = (cartItem: CartItem, productToRemove: CartItem) => {
  return cartItem.id === productToRemove.id
    ? {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      }
    : cartItem;
};

const addCartItem = (
  cartItems = [] as CartItem[],
  productToAdd: CategoryItem
) => {
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

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
  const cartItemToRemove = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (cartItemToRemove?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItemsToRemove(cartItem, productToRemove)
  );
};

const clearCartItem = (
  cartItems = [] as CartItem[],
  productToRemove: CartItem
) => cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

export const setShowCart = withMatcher(
  (bool: boolean): SetShowCart =>
    createAction(CART_ACTION_TYPES.SET_SHOW_CART, bool)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = withMatcher(
  (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
  }
);

export const removeItemFromCart = withMatcher(
  (cartItems = [] as CartItem[], productToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
  }
);

export const clearItemFromCart = withMatcher(
  (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
  }
);
