import React from "react";
import { Select } from "../../components/filter/select/Select";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectValue } from "../../redux/selectors";
import {
  setActivePage,
  setMovieURL,
  setSelectValue,
} from "../../redux/actions";

export function SelectContainer({ data, header }) {
  const dispatch = useDispatch();
  const activeSelect = useSelector(selectSelectValue);

  const handleSelectChange = (event) => {
    dispatch(setSelectValue(event.target.value));
    dispatch(setMovieURL(""));
    dispatch(setActivePage(1));
  };

  return (
    <Select
      data={data}
      header={header}
      onChange={handleSelectChange}
      activeSelect={activeSelect}
    />
  );
}
