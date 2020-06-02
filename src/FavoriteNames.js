import React from "react";
import useSound from 'use-sound';

const FavoriteNames = (props) => { 
  return (
    <div>
      <div className="container">
        <img src="yin-yang.png" alt="yin-yang" >

        </img>
        <div className="favorites">
          <span>Favourites: </span>
          {props.names.map((name) => (
            <span key={name.id} className={name.sex} onClick={()=>props.remove(name)}>{name.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteNames;