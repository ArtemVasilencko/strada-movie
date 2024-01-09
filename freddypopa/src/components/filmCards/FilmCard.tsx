import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { FilmCardProps } from "../../interfaces/uiInterfaces";

export function FilmCard(props: FilmCardProps) {
  const { image, movieName, rating, id, onCardClick, favorite, onStarClick } =
    props;

  return (
    <Link to={`/filmAbout/${id}`}>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => {
          localStorage.setItem("activeId", id.toString());
          onCardClick(id);
        }}
      >
        <CardActionArea style={{ flex: 1 }}>
          <CardMedia
            component="img"
            image={image}
            alt={movieName}
            style={{ objectFit: "cover" }}
          />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
              padding: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 600,
                marginBottom: "10px",
              }}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {movieName}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{rating}</Typography>

              {favorite ? (
                <StarIcon onClick={onStarClick} />
              ) : (
                <StarBorderIcon onClick={onStarClick} />
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
