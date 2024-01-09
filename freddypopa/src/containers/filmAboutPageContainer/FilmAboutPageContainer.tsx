import { useEffect, useState } from "react";
import { FilmAboutPage } from "../../pages/FilmAboutPage/FilmAboutPage";
import { useSelector } from "react-redux";
import { fetchData } from "../../components/fetch/fetch";
import { selectActiveMovieId, selectToken } from "../../redux/selectors";
import { GetActiveUrl } from "../../components/utils/GetActiveUrl";
import { FavoriteMoviesType } from "../../interfaces/apiInterfaces";

export function FilmAboutPageContainer() {
  const [movieAboutDetails, setMovieAboutDetails] = useState();
  const [movieAboutCredits, setMovieAboutCredits] = useState();
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const id =
    useSelector(selectActiveMovieId) || localStorage.getItem("activeId");
  const activeToken = useSelector(selectToken) || localStorage.getItem("token");
  const detailsUrl = GetActiveUrl("details") || "";
  const creditsUrl = GetActiveUrl("credits") || "";
  const favoriteUrl = GetActiveUrl("favorite") || "";

  useEffect(() => {
    try {
      async function fetchFavoriteMovies() {
        const favoritesData: FavoriteMoviesType = await fetchData(
          favoriteUrl,
          activeToken as string,
          "GET"
        );
        console.log(favoritesData);
        const favoritesId = favoritesData.results.map(
          (favorite) => favorite.id
        );
        setFavorite(
          favoritesId.map((movieId) => movieId).includes(id as number)
        );
      }

      async function fetchMovieDetails() {
        const data = await fetchData(detailsUrl, activeToken as string, "GET");
        console.log(data);
        setMovieAboutDetails(data);
      }

      async function fetchMovieCredits() {
        const data = await fetchData(creditsUrl, activeToken as string, "GET");
        console.log(data);
        setMovieAboutCredits(data);
      }

      const fetchDataAndSetLoading = async () => {
        setLoading(true);
        await fetchFavoriteMovies();
        await fetchMovieDetails();
        await fetchMovieCredits();
        setLoading(false);
      };

      fetchDataAndSetLoading();
    } catch (error) {
      console.error(error);
    }
  }, [activeToken, id]);

  return (
    <>
      <FilmAboutPage
        movieAboutDetails={movieAboutDetails}
        movieAboutCredits={movieAboutCredits}
        loading={loading}
        setFavorite={setFavorite}
        favorite={favorite}
        token={activeToken}
        id={id}
      />
    </>
  );
}
