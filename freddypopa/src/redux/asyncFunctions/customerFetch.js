import {
  setActivePage,
  setSelectValue,
  setMovieURL,
  setAnyMovies,
  setTotalPages,
  setIsFetching,
  setGenres,
} from "../actions";
import { optionsGET } from "../../components/fetch/fetch";

export const anyMoviesFetch = (url, token) => {
  return async function (dispatch) {
    if (!token) return;
    const response = await fetch(url, optionsGET(token));
    const data = await response.json();
    dispatch(setAnyMovies(data.results));
    dispatch(setTotalPages(data.total_pages));
    dispatch(setIsFetching(false));
    if (!data.results?.length) {
      dispatch(setActivePage(1));
      dispatch(setSelectValue("popular"));
      dispatch(setMovieURL(""));
      alert("Не найдено");
    }
  };
};

export const genresFetch = (url, token) => {
  return async function (dispatch) {
    if (!token) return;
    const response = await fetch(url, optionsGET(token));
    const data = await response.json();
    dispatch(setGenres(data.genres));
  };
};
