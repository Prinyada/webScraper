import React, { useState } from "react";
import "./Dialog.css";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dialog(props) {
  let history = useNavigate();
  
  return (
    <div className="container-dialog">
      <div className="content-dialog">
        <div className="content-dialog-top">
          <FaBell />
        </div>
        <div className="content-dialog-bottom">
          <p>{props.message}</p>
          <button
          >
            go to {props.message}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
