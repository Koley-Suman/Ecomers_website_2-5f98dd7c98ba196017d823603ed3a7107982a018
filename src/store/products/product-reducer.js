import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories:[]
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
       setcategories(state,action){
        state.categories=action.payload
       }
    }
});

export const {setcategories} = productSlice.actions;
export const productReducer = productSlice.reducer;