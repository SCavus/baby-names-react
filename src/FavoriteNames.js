import React, { useState } from "react";
import useSound from "use-sound";
import mozart from "./mozart.mp3";

const FavoriteNames = (props) => {
  const [isClicked, setIsClicked] = useState(false)
  const [play, { stop }] = useSound(mozart, { volume: 0.5 });

  const toggle = () => {
    setIsClicked(!isClicked);
  }

  //const [isHovering, setIsHovering] = React.useState(false);

//  const [play] = useSound(mozart);

  return (
    <div>
      <div className="container">
        <img onClick={()=>{
          toggle(); 
         isClicked ? play() : stop()}}
        //onMouseEnter is not allowed by Chrome
          // onMouseEnter={() => {
          //   setIsHovering(true);
          //   play();
          // }}
          // onMouseLeave={() => {
          //   setIsHovering(false);
          //   stop();
          // }}
          src="yin-yang.png"
          alt="yin-yang"
        />
        <div className="favorites">
          <span>Favourites: </span>
          {props.names.map((name) => (
            <span
              key={name.id}
              className={name.sex}
              onClick={() => props.remove(name)}
            >
              {name.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteNames;
