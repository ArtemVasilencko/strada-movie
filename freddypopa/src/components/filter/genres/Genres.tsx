import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { GenresProps } from "../../../interfaces/uiInterfaces";

export function Genres({
  genres,
  activeGenres,
  handleGenresChange,
}: GenresProps) {
  return (
    <Autocomplete
      multiple
      options={genres || []}
      disableCloseOnSelect
      onChange={handleGenresChange}
      getOptionLabel={(option) => option.name}
      value={activeGenres}
      renderOption={(props, option) => (
        <li {...props}>{option.name.toUpperCase()}</li>
      )}
      renderInput={(params) => (
        <TextField
          variant="standard"
          {...params}
          label="Жанры"
          placeholder="Найти"
        />
      )}
      sx={{ width: "330px" }}
    />
  );
}
