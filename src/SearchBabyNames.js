import React, { useState, useEffect } from "react";
import data from "./babyNamesData.json";
import ListBabyNames from "./ListBabyNames";

const SearchBabyNames = () => {
  const [letter, setLetter] = useState('');
  const [names, setNames] = useState([]);

  const lowerCase = (e) => {
    setLetter((e.target.value).toLowerCase());
  };

  useEffect(() => {
    setNames(data.filter((item) => item.name.toLowerCase().includes(letter)));
  }, [letter]);

  return (
    <div className="container">
      {<input
        type="text"
        className="search"
        placeholder="Search"
        onChange={lowerCase}
      ></input>}
      <ListBabyNames babyNames={names} />
    </div>
  );
};

export default SearchBabyNames;
