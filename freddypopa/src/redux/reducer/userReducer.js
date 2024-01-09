import { SET_ACCOUNT_ID, SET_TOKEN } from "../actions";
import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  token: null,
  accountId: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_TOKEN, (state, action) => {
      state.token = action.payload;
    })
    .addCase(SET_ACCOUNT_ID, (state, action) => {
      state.accountId = action.payload;
    });
});
