import { ChangeEvent } from "react";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchMovieProps } from "../../../interfaces/uiInterfaces";

export function SearchMovie({
  handleSubmit,
  movieName,
  setMovieName,
}: SearchMovieProps) {
  return (
    <>
      <Typography>Поиск по названию</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Поиск по названию"
          variant="standard"
          value={movieName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMovieName(e.target.value)
          }
          sx={{ width: "330px", marginBottom: "35px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
}
