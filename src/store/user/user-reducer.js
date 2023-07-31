import { createSlice } from "@reduxjs/toolkit";

const Initial_state = {
    currentUser: null,
  };

export const userSlice = createSlice({
    name:"user",
    initialState:Initial_state,
    reducers:{
        SetCurrentUser(state,action){
            state.currentUser=action.payload
        }
    }
})

export const {SetCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer