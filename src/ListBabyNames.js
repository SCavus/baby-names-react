import React from "react";
import data from "./babyNamesData.json";

const ListBabyNames = () => {
  const babyNames = data.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div>
        <img src='https://i.dlpng.com/static/png/1415089_preview_preview.png' alt='yin-yang'/>
      <div className="all-baby-names">
        {babyNames.map((baby, index) => (
          <p key={index} className={baby.sex}>
            {baby.name}
          </p>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default ListBabyNames;
