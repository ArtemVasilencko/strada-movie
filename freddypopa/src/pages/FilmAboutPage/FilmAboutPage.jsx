import { Link } from "react-router-dom";
import { Typography, Box, IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { HeaderContainer } from "../../containers/headerContainer/HeaderContainer";
import { MovieAboutDetails } from "./MovieAboutDetails";
import { MovieAboutActors } from "./MovieAboutActors";
import { handleStarClick } from "../../components/fetch/AddFavoriteMovie";
import { Loading } from "../../components/loadingWindow/Loading";
import { getImageUrl } from "../../components/utils/getImageUrl";
import "./filmAboutPage.css";

export function FilmAboutPage({
  movieAboutDetails,
  movieAboutCredits,
  loading,
  setFavorite,
  favorite,
  token,
  id,
}) {
  return loading ? (
    <Loading isVisible={true} />
  ) : (
    <>
      <HeaderContainer headerTitle={`Фильмы - ${movieAboutDetails.title}`} />
      <Box className="movie__about-page">
        <Box className="movie__poster">
          <Box>
            <img src={getImageUrl(movieAboutDetails.poster_path)} alt="movie" />
          </Box>
        </Box>
        <Box>
          <Box className="movie__title">
            <Link to="/">
              <IconButton className="backButton">
                <ArrowBack />
              </IconButton>
            </Link>
            <Typography variant="h4" component="h2">
              {movieAboutDetails.title} (
              {movieAboutDetails.release_date.split("-")[0]})
            </Typography>
            <IconButton
              onClick={(e) => {
                handleStarClick(e, setFavorite, favorite, token, id);
              }}
            >
              {favorite ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Box>

          <Typography variant="h4" sx={{ marginBottom: "10px" }}>
            Актеры
          </Typography>
          <Box className="actors__container">
            <MovieAboutActors movieAboutCredits={movieAboutCredits} />
          </Box>
          <Box className="movie__details-container">
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: "20px" }}
            >
              Детали
            </Typography>

            <MovieAboutDetails
              movieAboutDetails={movieAboutDetails}
              movieAboutCredits={movieAboutCredits}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
