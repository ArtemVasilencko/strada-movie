import { useSelector } from "react-redux";
import {
  selectActiveGenresIds,
  selectActiveMovieId,
  selectActivePage,
  selectEndDate,
  selectMovieURL,
  selectSelectValue,
  selectStartDate,
} from "../../redux/selectors";

type UrlType = "favoriteWithPage" | "favorite" | "details" | "credits" | "url";

export function GetActiveUrl(urlType: UrlType) {
  const accountId = localStorage.getItem("accountId");
  const activePage = useSelector(selectActivePage);
  const movieUrl: string = useSelector(selectMovieURL);
  const activeSelect = useSelector(selectSelectValue);
  const activeGenresIds = useSelector(selectActiveGenresIds);
  const startDate = useSelector(selectStartDate) + "-01-01";
  const endDate = useSelector(selectEndDate) + "-01-01";
  const id =
    useSelector(selectActiveMovieId) || localStorage.getItem("activeId");

  const baseUrl = "https://api.themoviedb.org/3/";
  const languageParams = "language=ru";
  const primaryReleaseStartDate = `&primary_release_date.gte=${startDate}`;
  const primaryReleaseEndDate = `&primary_release_date.lte=${endDate}`;

  const detailsUrl = `${baseUrl}movie/${id}?language=ru-US`;
  const creditsUrl = `${baseUrl}movie/${id}/credits?language=ru-US`;
  const favoriteUrl = `${baseUrl}account/${accountId}/favorite/movies`;

  const popularUrl = `${baseUrl}discover/movie?${languageParams}&page=${activePage}${primaryReleaseStartDate}${primaryReleaseEndDate}&sort_by=popularity.desc&with_genres=${activeGenresIds}`;
  const ratingUrl = `${baseUrl}discover/movie?${languageParams}&page=${activePage}${primaryReleaseStartDate}${primaryReleaseEndDate}&sort_by=vote_count.desc&with_genres=${activeGenresIds}`;
  const favoriteUrlWithPage = `${baseUrl}account/${accountId}/favorite/movies?language=ru-US&page=${activePage}&sort_by=created_at.desc`;
  const movieSearchUrl = movieUrl + activePage;

  if (urlType === "favoriteWithPage") return favoriteUrlWithPage;
  if (urlType === "favorite") return favoriteUrl;
  if (urlType === "details") return detailsUrl;
  if (urlType === "credits") return creditsUrl;

  let activeUrl = "";
  if (activeSelect === "popular") activeUrl = popularUrl;
  if (activeSelect === "rating") activeUrl = ratingUrl;
  if (activeSelect === "favorite") activeUrl = favoriteUrl;
  if (movieUrl) activeUrl = movieSearchUrl;

  if (urlType === "url") return activeUrl;
}
