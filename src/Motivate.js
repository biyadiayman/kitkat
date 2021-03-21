import React, { useState, useEffect } from "react";

import { quotes } from "./quotes.js";

const Quote = (props) => {
  return (
    <div className="flex flex-col inline-block text-gray-500">
      <span className="text-2xl">{JSON.stringify(props.q.text)}</span>
      <span className="self-end italic text-gray-400">
        -{JSON.stringify(props.q.author).replace(/['"]+/g, "")}
      </span>
    </div>
  );
};

const Motivate = () => {
  /*const [quotes, setQuotes] = useState({});

    async function fetchData() {
        const res = await fetch("https://type.fit/api/quotes");
        res.json().then((res) => setQuotes(res));
    }

    useEffect(() => {
    fetchData();
    });

    const getRndmQuote = () => {
        return JSON.stringify(quotes[getRandomInt(0, quotes.length)])
    }*/

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRndmQuote = () => {
    return quotes[getRandomInt(0, quotes.length)];
  };

  return (
    <div>
      <span></span>
      <Quote q={getRndmQuote()} />
    </div>
  );
};

export default Motivate;
