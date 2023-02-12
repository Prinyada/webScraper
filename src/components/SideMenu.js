import React from 'react'
import './SideMenu.css';
import { Menu } from 'antd';
import { EditOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


function SideMenu() {
    const navigate = useNavigate();
  return (
    <div className="sidemenu-container">
        <Menu
        onClick={(item) => {
            navigate(item.key);
        }}
        items={[
            {
                label: "แก้ไขรหัสผ่าน",
                icon: <EditOutlined />,
                key: "editpassword"
            },
            {
                label: "เพิ่มข้อมูล",
                icon: <EditOutlined />,
                key: "insertdata"
            }
        ]}
        ></Menu>
    </div>
  )
}

export default SideMenu