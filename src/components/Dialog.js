import React from 'react';
import "./Dialog.css";
export const Dialog = ({openDialog, setOpenDialog}) => {
  return (
    <div className="container">
        <p>ไม่ใช่ระบบซื้อขายจ้า</p>
        <button>รับทราบ</button>
    </div>
  )
}
