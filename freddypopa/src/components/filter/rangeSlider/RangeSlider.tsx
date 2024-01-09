import { Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { RangeSliderProps } from "../../../interfaces/uiInterfaces";

export function RangeSlider({ value, onChange }: RangeSliderProps) {
  return (
    <Box sx={{ width: 320, marginBottom: "40px" }}>
      <Typography sx={{ marginBottom: "60px" }}>Год релиза:</Typography>
      <Slider
        marks
        defaultValue={value}
        step={10}
        min={1950}
        max={2024}
        value={value}
        onChange={onChange}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
