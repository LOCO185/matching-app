import React from "react";
import "./style.css";

function Button({ iconUrl, handleClick, type }) {
  return (
    <img
      onClick={() => handleClick(type)}
      className="icon"
      src={iconUrl}
      alt=""
    />
  );
}

export default Button;
