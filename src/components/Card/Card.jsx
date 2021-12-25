import React from "react";
import "./style.css";
import { images } from "../Data/Data";

function Card({ currentItem }) {
  return (
    <div className="card">
      <img src={images[currentItem].url} alt={images[currentItem].name} />
      <h1>{images[currentItem].name}</h1>
    </div>
  );
}

export default Card;
