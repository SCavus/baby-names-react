import React from "react";
import useSound from "use-sound";
import mozart from "./mozart.mp3";

const FavoriteNames = (props) => {
  // const [play] = useSound(mozart)
  const [play, { stop }] = useSound(mozart, { volume: 0.5 });

  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div>
      <div className="container">
        <img
          onMouseEnter={() => {
            setIsHovering(true);
            play();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            stop();
          }}
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
