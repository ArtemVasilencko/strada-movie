import { SET_SELECT_VALUE, SET_ACTIVE_PAGE, SET_TOTAL_PAGES } from "../actions";
import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  selectValue: "popular",
  activePage: 1,
  totalPages: 1,
};

export const moviesSortReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_SELECT_VALUE, (state, action) => {
      state.selectValue = action.payload;
    })
    .addCase(SET_ACTIVE_PAGE, (state, action) => {
      state.activePage = action.payload;
    })
    .addCase(SET_TOTAL_PAGES, (state, action) => {
      state.totalPages = action.payload;
    });
});
