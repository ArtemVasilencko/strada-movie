import { useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { handleStarClick } from "../../components/fetch/AddFavoriteMovie";
import { FilmCard } from "../../components/filmCards/FilmCard";
import { selectToken } from "../../redux/selectors";
import { FilmCardProps } from "../../interfaces/uiInterfaces";

export function FilmCardContainer(props: FilmCardProps) {
  const { isFavorite, id } = props;
  const [favorite, setFavorite] = useState<boolean>(isFavorite);
  const activeToken: string | null =
    useSelector(selectToken) || localStorage.getItem("token");

  const changeFavoriteMovie = (e: MouseEvent<HTMLElement>) => {
    handleStarClick(e, setFavorite, favorite, activeToken, id);
  };

  return (
    <FilmCard
      {...props}
      token={activeToken}
      favorite={favorite}
      onStarClick={changeFavoriteMovie}
    />
  );
}
