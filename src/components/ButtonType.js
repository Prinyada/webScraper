import React from "react";
import "./ButtonType.css";

function ButtonType(props) {
  const { title, buttonStyle } = props;
  return (
    <div className="button-wrapper">
      <button className={`${buttonStyle}`}>{title}</button>
    </div>
  );
}

export default ButtonType;
