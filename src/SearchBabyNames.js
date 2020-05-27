import React, { useState } from "react";
import data from "./babyNamesData.json";
import ListBabyNames from "./ListBabyNames";

const SearchBabyNames = () => {
  const [names, setNames] = useState(data);

  const filterNames = (value) => {
    setNames(data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <div className="container">
      {<input
        type="text"
        className="search"
        placeholder="Search"
        onChange={(e)=> filterNames(e.target.value)}
      ></input>}
      <ListBabyNames babyNames={names} />
    </div>
  );
};

export default SearchBabyNames;
