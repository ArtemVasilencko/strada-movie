import { FC } from "react";
import { Box } from "@mui/material";
import { Header } from "../header/Header";
import CircularProgress from "@mui/material/CircularProgress";
import "./loading.css";

interface LoadingProps {
  isVisible: boolean;
}

export const Loading: FC<LoadingProps> = ({ isVisible }) => {
  return (
    <>
      {isVisible && <Header headerTitle={"Фильмы - loading..."} />}
      <Box className="loading__box">
        <CircularProgress />
      </Box>
    </>
  );
};
