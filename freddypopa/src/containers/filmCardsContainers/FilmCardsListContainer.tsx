import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetActiveUrl } from "../../components/utils/GetActiveUrl";
import { fetchData } from "../../components/fetch/fetch";
import { FilmCardsList } from "../../components/filmCards/FilmCardsList";
import { setActiveMovieId } from "../../redux/actions";
import { anyMoviesFetch } from "../../redux/asyncFunctions/customerFetch";
import { setIsFetching } from "../../redux/actions";
import {
  selectToken,
  selectSelectValue,
  selectActivePage,
  selectMovieList,
  selectIsFetching,
} from "../../redux/selectors";

export function FilmCardsListContainer() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);
  const activeSelect = useSelector(selectSelectValue);
  const activePage = useSelector(selectActivePage);
  const activeToken = useSelector(selectToken) || localStorage.getItem("token");
  const isFetching = useSelector(selectIsFetching) || null;

  const favoriteUrl = GetActiveUrl("favoriteWithPage");
  const url = GetActiveUrl("url");
  function onCardClick(id) {
    dispatch(setActiveMovieId(id));
  }

  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      try {
        if (activeToken) {
          dispatch(setIsFetching(true));
          const favoritesData = await fetchData(
            favoriteUrl,
            activeToken,
            "GET"
          );
          const favoritesId = favoritesData.results.map(
            (favorite) => favorite.id
          );
          setFavoriteMovies(favoritesId);
          dispatch(anyMoviesFetch(url, activeToken));
        } else {
          setFavoriteMovies([]);
        }
      } catch (error) {
        console.error("Ошибка при загрузке фильмов:", error);
      }
    };

    fetchDataAndDispatch();
  }, [activePage, activeSelect, activeToken, url, dispatch, favoriteUrl]);

  return (
    <FilmCardsList
      loading={isFetching}
      moviesData={movieList}
      favoriteMovies={favoriteMovies}
      onCardClick={onCardClick}
    />
  );
}
