import React from "react";
import "./breathe.css";
import music from "./assets/Spenta_Mainyu.mp3";
import Player from "./player";

const Breath = () => {
  return (
    <>
      <div className="flex flex-col h-full ">
        <Player className="	self-end" url={music} />
        <div className="flex h-96 flex-col items-center justify-center p-20">
          <div className="orb_1 rounded-full w-32 h-32"></div>
          <div className="orb_3 absolute rounded-full w-32 h-32"></div>
          <div className="orb_2 absolute flex items-center justify-center rounded-full w-32 h-32">
            <span className="breathe"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breath;
