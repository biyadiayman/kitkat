import React from "react";
import Motivate from "./Motivate.js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Exercises = ({ handleLogout }) => {
  const videos = [
    "https://www.youtube.com/embed/KakbbW7Fz9Y",
    "https://www.youtube.com/embed/g_tea8ZNk5A",
    "https://www.youtube.com/embed/CAq9vV7gkrs",
    "https://www.youtube.com/embed/M-8FvC3GD8c",
  ];
  const videoSrc = videos[getRandomInt(0, videos.length)];

  return (
    <section className=" h-full flex flex-col justify-center align-center items-center p-36">
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="flex flex-col items-center m-36 ">
        <Motivate />
      </div>
    </section>
  );
};

export default Exercises;
