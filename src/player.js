import React, { useState, useEffect } from "react";
import play from "./assets/play.png";
import mute from "./assets/mute.png";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>
        {playing ? (
          <img className="w-10" alt="play" src={play} />
        ) : (
          <img alt="mute" className="w-8" src={mute} />
        )}
      </button>
    </div>
  );
};

export default Player;
