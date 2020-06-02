import React from "react";

const ListBabyNames = props => {
  return (
    <div>
      <div className="all-baby-names">
        {props.babyNames
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((baby, index) => (
            <p key={index} className={baby.sex} onClick={() => props.add(baby)}>
              {baby.name}
            </p>
          ))}
      </div>
      <hr color="red" />
    </div>
  );
};

export default ListBabyNames;

// import React, { useState, useEffect } from "react";
// //import data from "./babyNamesData.json";

// const ListBabyNames = (props) => {
//   useEffect(()=> {setRemovedNAme(props.babyNames)}, [props.babyNames])
//   const [selectName, setSelectName] = useState([]);
//   const [removedName, setRemovedNAme] = useState(props.babyNames);
//   console.log(removedName);

//   const addToFavorites = (value) => {
//     setRemovedNAme(removedName.filter((item) => item.id !== value.id));
//     setSelectName((selectName) => [...selectName, value]);
//   };

//   const removeFromFavorites = (value) => {
//     setRemovedNAme((removedName) => [...removedName, value]);
//     setSelectName(selectName.filter((item) => item.id !== value.id));
//   }

//   return (
//     <div>
//       <div className="container">
//         <img src="yin-yang.png" alt="yin-yang" />
//         <div className="favorites">
//           <span>Favourites: </span>
//           {selectName.map((name, index) => (
//             <span key={index} className={name.sex} onClick={()=>removeFromFavorites(name)}>{name.name}</span>
//           ))}
//         </div>
//         <div className="all-baby-names">
//           {removedName
//             .sort((a, b) => (a.name > b.name ? 1 : -1))
//             .map((baby, index) => (
//               <p
//                 key={index}
//                 className={baby.sex}
//                 onClick={() => addToFavorites(baby)}
//               >
//                 {baby.name}
//               </p>
//             ))}
//         </div>
//         <hr color="red" />
//       </div>
//     </div>
//   );
// };

// export default ListBabyNames;
