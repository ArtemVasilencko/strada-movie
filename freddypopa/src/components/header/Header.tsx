import { FC } from "react";
import { Typography, IconButton, AppBar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { HeaderProps } from "../../interfaces/uiInterfaces";

export const Header: FC<HeaderProps> = ({ headerTitle, handleOpen }) => {
  return (
    <AppBar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: "60px",
      }}
    >
      <Typography variant="h5" component="h2" sx={{ paddingLeft: "15px" }}>
        {headerTitle}
      </Typography>
      <IconButton onClick={handleOpen} sx={{ marginRight: "20px" }}>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
    </AppBar>
  );
};
