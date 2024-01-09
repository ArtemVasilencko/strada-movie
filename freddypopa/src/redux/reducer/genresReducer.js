import { createReducer } from "@reduxjs/toolkit";
import {
  SET_GENRES,
  SET_ACTIVE_GENRES,
  SET_ACTIVE_GENRES_IDS,
} from "../actions";

const initalState = {
  genresList: [],
  activeGenresList: [],
  activeGenresIds: "",
};

export const genresReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(SET_GENRES, (state, action) => {
      state.genresList = action.payload;
    })
    .addCase(SET_ACTIVE_GENRES, (state, action) => {
      state.activeGenresList = action.payload;
    })
    .addCase(SET_ACTIVE_GENRES_IDS, (state, action) => {
      state.activeGenresIds = action.payload;
    });
});
