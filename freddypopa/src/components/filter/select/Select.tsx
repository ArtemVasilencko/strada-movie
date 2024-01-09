import { TextField, MenuItem, Typography } from "@mui/material";
import { SelectProps } from "../../../interfaces/uiInterfaces";

export function Select({ data, header, onChange, activeSelect }: SelectProps) {
  return (
    <>
      <Typography sx={{ marginBottom: "10px", fontSize: "14px" }}>
        {header}
      </Typography>
      <TextField
        select
        value={activeSelect}
        className="filter__select"
        onChange={onChange}
        variant="standard"
        sx={{ width: "330px", marginBottom: "35px" }}
        label="Выбрать"
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
