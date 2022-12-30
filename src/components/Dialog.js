import React from "react";
import "./Dialog.css";
import { FaBell } from "react-icons/fa";
export const Dialog = ({ message }) => {
  return (
    <div className="container-dialog">
      <div className="content-dialog">
        <div className="content-dialog-top">
         <FaBell/>
        </div>
        <div className="content-dialog-bottom">
          <p>{message}</p>
          <button>รับทราบ</button>
        </div>
      </div>
    </div>
  );
};