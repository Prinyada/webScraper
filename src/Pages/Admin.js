import { Space } from 'antd';
import React, { useContext, useEffect } from 'react'
import SideMenu from '../components/SideMenu';
import AdminContent from '../components/AdminContent';
import "./Admin.css";
import { UserContext } from "../App"

function Admin() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() =>{
    dispatch({ type: "ADMIN", payload: true });
  },[]);
  return (
    <div className="admin-container">
      <Space className="SideMenuAndAdminContent">
        <SideMenu/>
        <AdminContent/>
      </Space>
    </div>
  )
}

export default Admin;