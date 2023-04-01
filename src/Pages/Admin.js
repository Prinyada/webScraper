import { Space } from "antd";
import React, { useContext, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import AdminContent from "../components/AdminContent";
import "./Admin.css";
import { UserContext } from "../App";
import RouteAdmin from '../router/RouteAdmin'

function Admin() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    dispatch({ type: "ADMIN", payload: true });
  }, []);

  return (
    <div className="admin-container">
      <RouteAdmin/>
    </div>
  );
}

export default Admin;
