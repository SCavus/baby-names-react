import React from "react";

const ListBabyNames = (props) => {
  return (
    <div className='container'>
      <img
        src="yin-yang.png"
        alt="yin-yang"
      />
      <div className="all-baby-names">
        {props.babyNames
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((baby, index) => (
            <p key={index} className={baby.sex}>
              {baby.name}
            </p>
          ))}
      </div>
      <hr color="red" />
    </div>
  );
};

export default ListBabyNames;
