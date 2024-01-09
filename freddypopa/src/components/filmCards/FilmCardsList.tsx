import { Box } from "@mui/material";
import { Loading } from "../loadingWindow/Loading";
import { FilmCardContainer } from "../../containers/filmCardsContainers/FilmCardContainer";
import { getImageUrl } from "../utils/getImageUrl";
import Grid from "@mui/material/Grid";
import { FilmCardsListProps } from "../../interfaces/uiInterfaces";

export const FilmCardsList: React.FC<FilmCardsListProps> = ({
  loading,
  moviesData,
  favoriteMovies,
  onCardClick,
}) => {
  return loading ? (
    <Loading movieTitle={"Фильмы"} />
  ) : (
    <Box sx={{ display: "flex" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ boxSizing: "border-box", padding: 0, width: "100%" }}
      >
        {moviesData &&
          moviesData.map((movieItem) => (
            <Grid key={movieItem.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <FilmCardContainer
                key={movieItem.id}
                image={getImageUrl(movieItem.poster_path)}
                movieName={movieItem.title}
                rating={`Рейтинг ${movieItem.vote_average}`}
                id={movieItem.id}
                onCardClick={onCardClick}
                isFavorite={favoriteMovies.includes(movieItem.id)}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
