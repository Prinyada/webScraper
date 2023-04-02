import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { MdAdminPanelSettings, MdHome } from "react-icons/md";
import { UserContext } from "../App";
import mainLogo from "../logo.png";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const { state, dispatch } = useContext(UserContext);

  let activeLink = "button-link active";
  let normalLink = "button-link";

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const RenderHeader = () => {
    if (state === true) {
      return (
        <div className="header">
          <div className="container">
            <div className="header-container">
              <div className="logo-container">
                <img src={mainLogo} className="main-logo" />
              </div>
              <div className="header-center"></div>
              <div className={click ? "header-right actived" : "header-right"}>
                <div className="button-main-admin" onClick={closeMobileMenu}>
                  <NavLink
                    to="/admin/main"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    หน้าหลัก
                  </NavLink>
                </div>
                <div className="button-editpassword" onClick={closeMobileMenu}>
                  <NavLink
                    to="/admin/editpassword"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    แก้ไขรหัสผ่าน
                  </NavLink>
                </div>
                <div className="button-insertdata" onClick={closeMobileMenu}>
                  <NavLink
                    to="/admin/insertdata"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    เพิ่มข้อมูลในการกรอง
                  </NavLink>
                </div>
                <div className="button-admin" onClick={closeMobileMenu}>
                  <NavLink
                    to="/login"
                    className="button-link-logout"
                    onClick={() => {
                      dispatch({ type: "ADMIN", payload: false });
                      closeMobileMenu();
                    }}
                  >
                    ออกจากระบบ
                  </NavLink>
                </div>
              </div>
              <div className="mobile-menu" onClick={handleClick}>
                {click ? <FiX /> : <FiMenu />}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (state !== true) {
      return (
        <div className="header">
          <div className="container">
            <div className="header-container">
              <div className="logo-container">
                <div className="logo-link">
                  <img src={mainLogo} className="main-logo" />
                </div>
              </div>
              <div className={click ? "header-right actived" : "header-right"}>
                <div className="button-home" onClick={closeMobileMenu}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <MdHome className="logo" />
                    หน้าหลัก
                  </NavLink>
                </div>
                <div className="button-admin" onClick={closeMobileMenu}>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <MdAdminPanelSettings className="logo" />
                    แอดมิน
                  </NavLink>
                </div>
              </div>
              <div className="mobile-menu" onClick={handleClick}>
                {click ? <FiX /> : <FiMenu />}
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
