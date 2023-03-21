import React from 'react'
import './SideMenu.css';
import { Menu } from 'antd';
import { EditOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai" ;


function SideMenu() {
    const navigate = useNavigate();
  return (
    <div className="sidemenu-container">
        <Menu
        onClick={(item) => {
            navigate(item.key);
            console.log(item.key);
        }}
        items={[
            {
                label: "หน้าหลัก",
                icon: <AiOutlineHome />,
                key: "main"
            },
            {
                label: "แก้ไขรหัสผ่าน",
                icon: <EditOutlined />,
                key: "editpassword"
            },
            {
                label: "เพิ่มข้อมูลในการกรอง",
                icon: <IoIosAddCircleOutline />,
                key: "insertdata"
            }
        ]}
        ></Menu>
    </div>
  )
}

export default SideMenu