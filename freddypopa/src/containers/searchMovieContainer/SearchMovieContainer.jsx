import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setActiveGenres,
  setActiveGenresIds,
  setActivePage,
  setMovieURL,
  setSelectValue,
} from "../../redux/actions";
import { SearchMovie } from "../../components/filter/searchMovie/SearchMovie";

export function SearchMovieContainer() {
  const [movieName, setMovieName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (movieName.trim() === "") return alert('Введите название фильма');
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=ru-US&page=`;
    dispatch(setMovieURL(url));
    dispatch(setActiveGenres([]));
    dispatch(setSelectValue(""));
    dispatch(setActivePage(1));
    dispatch(setActiveGenresIds(""));
    setMovieName("");
  }

  return (
    <SearchMovie
      handleSubmit={handleSubmit}
      setMovieName={setMovieName}
      movieName={movieName}
    />
  );
}
