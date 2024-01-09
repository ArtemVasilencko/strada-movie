import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Box } from "@mui/material";
import { HeaderContainer } from "../../containers/headerContainer/HeaderContainer";
import { Filter } from "../../components/filter/Filter";
import { PaginationMenu } from "../../components/pagination/Pagination";
import { FilmCardsListContainer } from "../../containers/filmCardsContainers/FilmCardsListContainer";
import {
  selectMovieURL,
  selectSelectValue,
  selectToken,
} from "../../redux/selectors";
import "./filmApp.css";
import {
  setActiveGenres,
  setActiveGenresIds,
  setActivePage,
  setEndDate,
  setMovieURL,
  setSelectValue,
  setStartDate,
} from "../../redux/actions";

export const FilmApp: FC = () => {
  return (
    <>
      <HeaderContainer headerTitle="Фильмы" />
      <Box className="film__app-wrapper">
        <FilmFilter />
        <FilmCardsListContainer />
      </Box>
    </>
  );
};

function FilmFilter(): React.FC {
  const dispatch = useDispatch();
  const activeToken = useSelector(selectToken) || localStorage.getItem("token");
  const searchMovieUrl = useSelector(selectMovieURL);
  function resetFilters() {
    dispatch(setSelectValue("popular"));
    dispatch(setMovieURL(""));
    dispatch(setActivePage(1));
    dispatch(setActiveGenres([]));
    dispatch(setActiveGenresIds(""));
    dispatch(setStartDate(2000));
    dispatch(setEndDate(2010));
  }

  return (
    activeToken && (
      <Paper className="sort__menu">
        <Filter resetFilters={resetFilters} searchMovieUrl={searchMovieUrl} />
        <PaginationMenu />
      </Paper>
    )
  );
}
