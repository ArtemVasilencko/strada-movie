import { SET_START_DATE, SET_END_DATE } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  startDate: 2000,
  endDate: 2010,
};

export const rangeSliderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_START_DATE, (state, action) => {
      state.startDate = action.payload;
    })
    .addCase(SET_END_DATE, (state, action) => {
      state.endDate = action.payload;
    });
});
