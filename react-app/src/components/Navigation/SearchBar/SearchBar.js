import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import classes from './SearchBar.module.css'

const SearchBar = () => {
  return (
      <div style={{position: "relative", width: "40%"}}>
    <SearchIcon fontSize="large" className={classes.Icon} />
    <input placeholder="Serach" className={classes.Bar} />
    </div>
  );
};

export default SearchBar;
