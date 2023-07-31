import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, removeItem) => {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );

  if (existingCartitem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const cancelCartItem = (cartItems, cancelItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== cancelItem.id);
};

const initialState = {
  iscartOpen: false,
  cartItem: [],
};
const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    setIscartOpen(state, action) {
      state.iscartOpen = action.payload;
    },

    addItemToCart(state,action){
        state.cartItem=addCartItem(state.cartItem,action.payload)
    },
    removeItemToCart(state,action){
        state.cartItem=removeCartItem(state.cartItem,action.payload)
    },
    cancelItemToCart(state,action){
        state.cartItem=cancelCartItem(state.cartItem,action.payload)
    }
  },
});

export const {setIscartOpen,addItemToCart,removeItemToCart,cancelItemToCart} = cartItemSlice.actions;

export const cartItemReducer = cartItemSlice.reducer;