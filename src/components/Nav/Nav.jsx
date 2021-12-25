import React from "react";
import { icons } from "../Data/Data";
import "./style.css";

function Nav({ likes, dislikes }) {
  return (
    <div className="nav">
      <div className="nav_counter-container">
        <img src={icons.sad} alt="" />
        <h1 style={{ color: "red" }}>{dislikes}</h1>
      </div>
      <div className="nav_counter-container">
        <img src={icons.smile} alt="" />
        <h1 style={{ color: "green" }}>{likes}</h1>
      </div>
    </div>
  );
}

export default Nav;
