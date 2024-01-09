import { ChangeEvent, FC } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setActivePage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectActivePage, selectTotalPages } from "../../redux/selectors";

export const PaginationMenu: FC = () => {
  const dispatch = useDispatch();
  const activePage: number = useSelector(selectActivePage) || 1;
  const totalPages: number = useSelector(selectTotalPages) || 1;

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(setActivePage(value));
  };

  return (
    <Stack
      sx={{
        marginBottom: "20px",
        width: "340px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Pagination
        size="small"
        count={totalPages}
        page={activePage}
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
};
