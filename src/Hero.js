import React from "react";
import Dash from "./Dash.js";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <Dash handleLogout={handleLogout} />
    </section>
  );
};
/*<nav>
  <h2>Oh Hi Mark!</h2>
  <button onClick={handleLogout}>Logout</button>
</nav>;*/

export default Hero;
