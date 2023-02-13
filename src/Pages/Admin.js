import { Space } from 'antd';
import React from 'react'
import SideMenu from '../components/SideMenu';
import AdminContent from '../components/AdminContent';
import "./Admin.css";

function Admin() {
  
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