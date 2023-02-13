import React, { useContext } from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdAdminPanelSettings } from "react-icons/md";
import { UserContext } from "../App";

function Header() {
  const { state, dispatch } = useContext(UserContext);

  const RenderHeader = () => {
    if (state === true) {
      return (
        <div className="header">
          <div className="container">
            <div className="header-container">
              <div className="logo-container">
                  ADMIN
              </div>
              <div className="header-right">
                <div
                  className="button-admin"
                  onClick={() => {
                    dispatch({ type: "ADMIN", payload: false });
                  }}
                >
                  <Link to="/login" className="button-link">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(state !== true) {
      return (
        <div className="header">
          <div className="container">
            <div className="header-container">
              <div className="logo-container">
                <Link to="/" className="logo-link">
                  <TbSpeakerphone />
                  EIEI
                </Link>
              </div>
              <div className="header-right">
                <div className="button-home">
                  <Link to="/" className="button-link">
                    Home
                  </Link>
                </div>
                <div className="button-admin">
                  <Link to="/login" className="button-link">
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
  };
  return <RenderHeader />;
}

export default Header;
