import { Box, Typography } from "@mui/material";
import "./filmAboutPage.css";

export const MovieAboutDetails = ({ movieAboutDetails, movieAboutCredits }) => {
  const directingPerson = movieAboutCredits.crew.find(
    (person) => person.known_for_department === "Directing"
  );

  return (
    <Box className="movie__details-container">
      {movieAboutDetails.production_countries[0] && (
        <Typography>
          <strong>Страна:</strong>{" "}
          {movieAboutDetails.production_countries[0].name}
        </Typography>
      )}

      {movieAboutDetails.release_date && (
        <Typography>
          <strong>Год:</strong> {movieAboutDetails.release_date.split("-")[0]}
        </Typography>
      )}

      {movieAboutDetails.genres[0] && (
        <Typography>
          <strong>Жанр:</strong> {movieAboutDetails.genres[0].name}
        </Typography>
      )}

      <Typography>
        <strong>Режиссер:</strong>{" "}
        {directingPerson ? directingPerson.name : " не найден"}
      </Typography>
      <Typography>
        <strong>Сценарий:</strong> {movieAboutDetails.overview}
      </Typography>
      <Typography>
        <strong>Бюджет:</strong> {movieAboutDetails.budget + "$"}
      </Typography>
      <Typography>
        <strong>Зрители:</strong> {movieAboutDetails.vote_count}
      </Typography>
      <Typography>
        <strong>Время:</strong> {movieAboutDetails.runtime + " minutes"}
      </Typography>
    </Box>
  );
};
