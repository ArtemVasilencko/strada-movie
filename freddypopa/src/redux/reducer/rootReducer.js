import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { movieURLReducer } from "./movieURLReducer";
import { moviesSortReducer } from "./moviesSortReducer";
import { activeMovieIdReducer } from "./activeMovieIdReducer";
import { genresReducer } from "./genresReducer";
import { moviesReducer } from "./moviesReducer";
import { rangeSliderReducer } from "./rangeSliderReducer";


export const rootReducer = combineReducers({
  movieURL: movieURLReducer,
  activeMovieId: activeMovieIdReducer,
  user: userReducer,
  rangeSlider: rangeSliderReducer,
  genres: genresReducer,
  moviesSort: moviesSortReducer,
  movieList: moviesReducer,
});
