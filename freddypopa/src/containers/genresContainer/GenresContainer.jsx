import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Genres } from "../../components/filter/genres/Genres";
import {
  selectActiveGenres,
  selectGenresList,
  selectToken,
} from "../../redux/selectors.js";
import { genresFetch } from "../../redux/asyncFunctions/customerFetch";
import { setActiveGenres, setActiveGenresIds } from "../../redux/actions";

export function GenresContainer() {
  const dispatch = useDispatch();
  const genresList = useSelector(selectGenresList);
  const activeGenres = useSelector(selectActiveGenres);
  const activeToken = useSelector(selectToken) || localStorage.getItem("token");

  function handleGenresChange(event, value) {
    const genresId = value.map((genre) => genre.id).join(",");
    dispatch(setActiveGenres(value));
    dispatch(setActiveGenresIds(genresId));
  }

  useEffect(() => {
    async function fetchGenres() {
      if (activeToken) {
        const url = "https://api.themoviedb.org/3/genre/movie/list?language=ru";
        try {
          dispatch(genresFetch(url, activeToken));
        } catch (error) {
          console.error("Ошибка при запросе жанров:", error);
        }
      }
    }

    fetchGenres();
  }, [activeToken, dispatch]);

  return (
    <Genres
      genres={genresList}
      activeGenres={activeGenres}
      handleGenresChange={handleGenresChange}
    />
  );
}
