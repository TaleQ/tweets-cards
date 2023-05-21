import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { toggleFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(toggleFilter(e.target.value));
  };
  return (
    <>
      <FormControl variant="standard" sx={{ mt: 1, mb: 5, minWidth: 120 }}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={filterValue}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value={"All"}>Show all</MenuItem>
          <MenuItem value={"Follow"}>Follow</MenuItem>
          <MenuItem value={"Following"}>Following</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
