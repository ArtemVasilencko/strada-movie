export const SET_TOKEN = "SET_TOKEN";
export const SET_MOVIE_URL = "SET_MOVIE_URL";
export const SET_ACCOUNT_ID = "SET_ACCOUNT_ID";
export const SET_SELECT_VALUE = "SET_SELECT_VALUE";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SET_ACTIVE_MOVIE_ID = "SET_ACTIVE_MOVIE_ID";
export const SET_ANY_MOVIES = "GET_ANY_MOVIES";
export const SET_GENRES = "SET_GENRES";
export const SET_ACTIVE_GENRES = "SET_ACTIVE_GENRES";
export const SET_ACTIVE_GENRES_IDS = "SET_ACTIVE_GENRES_IDS";
export const SET_START_DATE = "SET_START_DATE";
export const SET_END_DATE = "SET_END_DATE";
export const IS_FETCHING = "IS_FETCHING";


export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setMovieURL = (movieURL) => ({
  type: SET_MOVIE_URL,
  payload: movieURL,
});

export const setAccountId = (accountId) => ({
  type: SET_ACCOUNT_ID,
  payload: accountId,
});

export const setSelectValue = (selectValue) => ({
  type: SET_SELECT_VALUE,
  payload: selectValue,
});

export const setActivePage = (activePage) => ({
  type: SET_ACTIVE_PAGE,
  payload: activePage,
});

export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setActiveMovieId = (activeMovieId) => ({
  type: SET_ACTIVE_MOVIE_ID,
  payload: activeMovieId,
});

export const setAnyMovies = (movieList) => ({
  type: SET_ANY_MOVIES,
  payload: movieList,
});
export const setGenres = (genresList) => ({
  type: SET_GENRES,
  payload: genresList,
});
export const setActiveGenres = (activeGenres) => ({
  type: SET_ACTIVE_GENRES,
  payload: activeGenres,
});

export const setActiveGenresIds = (activeGenresIds) => ({
  type: SET_ACTIVE_GENRES_IDS,
  payload: activeGenresIds,
});

export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  payload: startDate,
});

export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  payload: endDate,
});

export const setIsFetching = (isFetching) => ({
  type: IS_FETCHING,
  payload: isFetching,
});


