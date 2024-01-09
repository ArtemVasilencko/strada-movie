import { FC } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SelectContainer } from "../../containers/selectContainer/SelectContainer";
import { GenresContainer } from "../../containers/genresContainer/GenresContainer";
import { RangeSliderContainer } from "../../containers/rangeSliderContainer/RangeSliderContainer";
import { SearchMovieContainer } from "../../containers/searchMovieContainer/SearchMovieContainer";
import { dataPopular } from "./select/dataSelect";
import { FilterProps } from "../../interfaces/uiInterfaces";
import "./filter.css";

export const Filter: FC<FilterProps> = ({ resetFilters, searchMovieUrl }) => {
  return (
    <Box>
      <Box className="filter__header">
        <Typography variant="h5">Фильтры</Typography>
        <IconButton onClick={resetFilters}>
          <CloseIcon />
        </IconButton>
      </Box>
      <SearchMovieContainer />
      <SelectContainer header="Сортировать по:" data={dataPopular} />
      {!searchMovieUrl && <RangeSliderContainer />}
      {!searchMovieUrl && <GenresContainer />}
    </Box>
  );
};
