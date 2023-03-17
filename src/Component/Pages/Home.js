import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <div className="main-home">
      <h2 className="margin-auto">Welcome To Expense Tracker</h2>
      <div className="profile">
        Your Profile is incomplete<br></br>
        <NavLink className="link-profile" to="/update">
          complete now
        </NavLink>
      </div>
    </div>
  );
};

export default Home;