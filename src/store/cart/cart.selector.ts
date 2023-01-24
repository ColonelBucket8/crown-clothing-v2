import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

const selectCartReducer = (state): CartState => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectShowCart = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.showCart
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
