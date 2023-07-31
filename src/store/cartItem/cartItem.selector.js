import { createSelector } from "@reduxjs/toolkit";

const selectCartReducer = (state) => state.cartItem;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.iscartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItem
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
