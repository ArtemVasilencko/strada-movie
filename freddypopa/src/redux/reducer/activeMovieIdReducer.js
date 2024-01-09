import { createReducer } from "@reduxjs/toolkit";
import { SET_ACTIVE_MOVIE_ID } from "../actions";

const initialState = "";

export const activeMovieIdReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_ACTIVE_MOVIE_ID, (state, action) => {
    return action.payload;
  });
});
