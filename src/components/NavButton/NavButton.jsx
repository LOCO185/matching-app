import React from "react";
import Button from "../Button/Button";
import "./style.css";
import { icons } from "../Data/Data"

function NavButtom({ like, dislike, nextItem, isEnd }) {
  const handleClick = (type) => {
    if (isEnd) return;
    type === "v" ? like() : dislike();
    nextItem();
  };
  return (
    <div className="nav-buttom">
      <Button iconUrl={icons.x} type="x" handleClick={handleClick} />
      <Button iconUrl={icons.v} type="v" handleClick={handleClick} />
    </div>
  );
}

export default NavButtom;
