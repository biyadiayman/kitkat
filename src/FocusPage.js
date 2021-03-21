import React from "react";
import Motivate from "./Motivate.js";
import Timer from "./timer.js";

const FocusPage = ({ handleLogout }) => {
  return (
    <section className=" h-full justify-end p-36">
      <Timer startCount={0} />
      <div className="flex flex-col items-center m-36 ">
        <Motivate />
      </div>
    </section>
  );
};

export default FocusPage;
