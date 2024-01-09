import { SET_MOVIE_URL } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = false;

export const movieURLReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_MOVIE_URL, (state, action) => {
    return action.payload;
  });
});
