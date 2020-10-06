import React, {  useCallback, useState } from "react";
import {
  withStyles,
  Paper,
  InputBase,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Style } from "./Style";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router-dom";
import { debounce } from "lodash";

function SearchBar({ classes, history, searchByName, filter }) {

  const [name, setName] = useState("");
  const [filterValue, setFilterValue] = useState("")
  const debounceCall = useCallback(debounce(searchByName, 300),[]);

  const handleNameChange = e => {
    setName(e.target.value)
    debounceCall(e.target.value)
  }

  const handleChange = e => {
    const value = (e.target.value)
    setFilterValue(value)
    const tempValue= value.split(":")
    filter(tempValue[0], tempValue[1])
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.search} square>
        <InputBase
          endAdornment={<SearchIcon />}
          style={{ width: "100%" }}
          placeholder="Search by name.."
          value={name}
          onChange={handleNameChange}
        />
      </Paper>
      <FormControl className={classes.filter}>
          <InputLabel>Filter</InputLabel>
        <Select value={filterValue} onChange={handleChange} style={{ width: "100%" }}>
          <MenuItem value="price:low">Low to high price</MenuItem>
          <MenuItem value="price:high">High to low price</MenuItem>
          <MenuItem value="quantity:low">Low to high quantity</MenuItem>
          <MenuItem value="quantity:high">High to low quantity</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={() => history.push('/add')} className={classes.btn} color="primary" variant="contained">
        Add New
      </Button>
    </div>
  );
}

export default withStyles(Style)(withRouter(SearchBar));
