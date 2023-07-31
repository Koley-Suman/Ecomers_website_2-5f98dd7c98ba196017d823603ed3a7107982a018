import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";
import { productReducer } from "./products/product-reducer";
import { cartItemReducer } from "./cartItem/cartItem-reducer";

export const rootReducer = combineReducers({
    user:userReducer,
    categories:productReducer,
    cartItem:cartItemReducer
})