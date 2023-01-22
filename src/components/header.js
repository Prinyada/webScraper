import React from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <TbSpeakerphone />EIEI
            </Link>
          </div>
          <div className="header-right">
            <div className="button-home">
              <Link to="/" className="button-link">
                Home
              </Link>
            </div>
            <div className="button-admin">
              <Link to="/admin" className="button-link">
                <MdAdminPanelSettings className="logo" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
