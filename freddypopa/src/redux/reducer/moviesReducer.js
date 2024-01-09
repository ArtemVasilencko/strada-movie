import { SET_ANY_MOVIES, IS_FETCHING } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const defaultState = {
  movieList: [],
  isFetching: false,
};

export const moviesReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(SET_ANY_MOVIES, (state, action) => {
      state.movieList = action.payload;
    })
    .addCase(IS_FETCHING, (state, action) => {
      state.isFetching = action.payload;
    });
});
