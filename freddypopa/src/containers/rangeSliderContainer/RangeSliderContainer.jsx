import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEndDate, setStartDate } from "../../redux/actions";
import { selectStartDate, selectEndDate } from "../../redux/selectors";
import { RangeSlider } from "../../components/filter/rangeSlider/RangeSlider";

export function RangeSliderContainer() {
  const dispatch = useDispatch();
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);
  const [value, setValue] = useState([2000, 2010]);

  useEffect(() => {
    setValue([startDate, endDate]);
  }, [startDate, endDate]);

  const handleChange = (event, value) => {
    setValue(value);
    dispatch(setStartDate(value[0]));
    dispatch(setEndDate(value[1]));
  };

  return <RangeSlider value={value} onChange={handleChange} />;
}
