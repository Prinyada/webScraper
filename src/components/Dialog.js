import React, { useState } from "react";
import "./Dialog.css";
import { FaBell } from "react-icons/fa";
import { Switch, Route } from 'react-router-dom';
import { LostItems } from "../LostItems";
import { SecondHand } from "../SecondHand";

function Dialog(props) {
  return (
    <div className="container-dialog">
      <div className="content-dialog">
        <div className="content-dialog-top">
         <FaBell/>
        </div>
        <div className="content-dialog-bottom">
          <p>{props.message}</p>
          <button>เข้าสู่หน้า {props.message}</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;