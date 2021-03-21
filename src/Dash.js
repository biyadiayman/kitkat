import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Breath from "./breath.js";
import BreathePage from "./BreathePage.js";
import ChatRoom from "./ChatRoom.js";
import Exercises from "./Exercises.js";
import FocusPage from "./FocusPage.js";
import Motivate from "./Motivate.js";
import Timer from "./timer.js";

/*const Dash = () => {
  return (
    <Router>
      <section>
        <Switch>
          <Route path="/focus" component={FocusPage} />
          <Route path="/breathe" component={BreathePage} />
          <div className="flex flex-col items-center m-36">
            <Motivate />
          </div>
        </Switch>
      </section>
    </Router>
  );
};*/

function Card(props) {
  return (
    <div className="w-3/4 bg-white m-5 shadow-lg hover:shadow-md text-indigo-900 rounded-lg flex flex-col p-10 items-center">
      <h3 className="mb-10 text-2xl font-bold">{props.title}</h3>
      <p className="mb-5">{props.text}</p>
      {props.butt ? (
        <button className="font-bold bg-indigo-400 hover:bg-indigo-300 text-white w-3/4 px-5 py-3 rounded-lg">
          <Link to={props.link}>{props.butt}</Link>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

const SideBar = ({ handleLogout }) => {
  return (
    <div className="w-1/6 text-xl text-white p-5 bg-indigo-400 rounded-lg my-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold m-5">NIRVANA </h2>

      <ul className="font-bold space-y-10 flex flex-col mt-20">
        <Link to="/">
          <li>Dashboard</li>
        </Link>
        <Link to="/breathe">
          <li>Meditation & Breathing</li>
        </Link>
        <Link to="/focus">
          <li>Focus & Track</li>
        </Link>
        <Link to="/exercise">
          <li>Exercise & Stretch</li>
        </Link>
        <Link to="/chat">
          <li>Grab a coffee!</li>
        </Link>
      </ul>
      <div className="flex  h-full">
        <button
          className="self-end font-bold text-xl underline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const Cards = () => {
  const heute = new Date();
  return (
    <>
      <div className=" m-10">
        <h1 className=" flex text-center text-indigo-400 font-bold text-5xl w-full">
          Welcome Mark!
        </h1>
        {heute.toDateString("MM")}
      </div>
      <div className="">
        <div className="flex">
          <Card
            title="Meditation"
            text="Keep the balance!"
            butt="Boot up Guru!"
            link="/breathe"
          />
          <Card
            title="Focus"
            text="Remove the distractions"
            butt="Enter tunnel mode!"
            link="/focus"
          />
          <Card
            title="Grab a coffee!"
            text="Meet your colleagues!"
            butt="Join the Fun!"
            link="/chat"
          />
        </div>
        <div className="flex">
          <Card
            title="Stats: Mindfulness"
            text="Hocus Pocus you've lost your focus"
          />
          <Card
            title="Stats: Activity"
            text="Hocus Pocus you've lost your focus"
          />
        </div>
        <div className="">
          <div className="flex flex-col items-center m-20">
            <Motivate />
          </div>
        </div>
      </div>
    </>
  );
};

const Dash = ({ handleLogout }) => {
  return (
    <Router>
      <div className="bg-gray-50 h-screen text-gray-500 flex justify-center">
        <SideBar handleLogout={handleLogout} />
        <div className=" m-10 w-3/4 ">
          <div className=" m-10">
            <section>
              <Switch>
                <Route path="/focus" component={FocusPage} />
                <Route path="/breathe" component={BreathePage} />
                <Route path="/" exact component={Cards} />
                <Route path="/exercise" exact component={Exercises} />
                <Route path="/chat" exact component={ChatRoom} />
              </Switch>
            </section>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dash;
