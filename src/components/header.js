import React, { useContext } from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { MdAdminPanelSettings } from "react-icons/md";
import { UserContext } from "../App";
import mainLogo from "../logo.png";

function Header() {
  const { state, dispatch } = useContext(UserContext);

  let activeLink = "button-link active";
  let normalLink = "button-link";

  const RenderHeader = () => {
    if (state === true) {
      return (
        <div className="header">
          <div className="container">
            <div className="header-container">
              <div className="logo-container">
                <img src={mainLogo} className="main-logo"/>
              </div>
              <div className="header-center">
                <p>DashBoard Admin</p>
              </div>
              <div className="header-right">
                <div
                  className="button-admin"
                  onClick={() => {
                    dispatch({ type: "ADMIN", payload: false });
                  }}
                >
                  <NavLink to="/login" className="button-link-logout">
                    Logout
                  </NavLink>
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
                <div className="logo-link">
                  <img src={mainLogo} className="main-logo"/>
                </div>
              </div>
              <div className="header-right">
                <div className="button-home">
                  <NavLink to="/" className={({ isActive }) => isActive? activeLink : normalLink}>
                    Home
                  </NavLink>
                </div>
                <div className="button-admin">
                  <NavLink to="/login" className={({ isActive }) => isActive? activeLink : normalLink}>
                    <MdAdminPanelSettings className="logo" />
                    Admin
                  </NavLink>
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
