import { Space } from "antd";
import React, { useContext, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import AdminContent from "../components/AdminContent";
import "./Admin.css";
import { UserContext } from "../App";

function Admin() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    dispatch({ type: "ADMIN", payload: true });
  }, []);

  return (
    <div className="admin-container">
        <section>
          <div className="sideMenu-content">
              <SideMenu />
          </div>
          <div className="resultMenu">
              <AdminContent />
              <p></p>
          </div>
        </section>
    </div>
  );
}

export default Admin;
