import React, { useState } from "react";
import data from "./babyNamesData.json";
import ListBabyNames from "./ListBabyNames";
import FavoriteNames from "./FavoriteNames";

const SearchBabyNames = () => {
  const [names, setNames] = useState(data);
  const [favoriteNames, setFavoriteNames] = useState([]);

  const filterNames = value => {
    setNames(
      data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const addToFavorites = value => {
    setFavoriteNames([...favoriteNames, value]);
    const updatedNames = names.filter(name => name.id !== (value.id));
    setNames(updatedNames)
  };

  const removeFromFavorites = value => {
    const updatedFavoriteNames = favoriteNames.filter(name => name.id !== value.id);
    setFavoriteNames(updatedFavoriteNames);
    const updatedNames = [...names, value];
    setNames(updatedNames)
  };

  return (
    <div className="container">
      {
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={e => filterNames(e.target.value)}
        />
      }
      <div className="container">
        <FavoriteNames names={favoriteNames} remove={removeFromFavorites} />
        <hr width='100%' color='white'/>
        <ListBabyNames babyNames={names} add={addToFavorites} />
      </div>
    </div>
  );
};

export default SearchBabyNames;
// import React, { useState } from "react";
// import data from "./babyNamesData.json";
// import ListBabyNames from "./ListBabyNames";

// const SearchBabyNames = () => {
//   const [names, setNames] = useState(data);

//   const filterNames = (value) => {
//     setNames(names.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
//   }

//   return (
//     <div className="container">
//       {<input
//         type="text"
//         className="search"
//         placeholder=" Search"
//         onChange={(e) => filterNames(e.target.value)}
//       ></input>}
//       <ListBabyNames babyNames={names} />
//     </div>
//   );
// };

// export default SearchBabyNames;
