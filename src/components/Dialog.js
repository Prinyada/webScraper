import React from "react";
import "./Dialog.css";

function Dialog(props) {
  let dialog = (
    <div className="dialog-style">
      <div className="dialog-header">
        <p className="text-dialog-header">ข้อตกลงในการใช้งาน</p>
        <button className="dialog-closeButtonStyle" onClick={props.onClose}>
          x
        </button>
      </div>
      <div className="dialog-content">
        <p className="text-dialog">
          1. ระบบจะไม่สามารถใช้งานได้ในช่วงเวลา 06:00 - 06:30 น. และ 18:00 -
          18:30 น. เนื่องจากมีการปรับปรุงระบบในช่วงเวลาดังกล่าว
          ถ้าหากมีการใช้งานอยู่อาจเกิดข้อผิดพลาดขึ้นได้
        </p>
        <p className="text-dialog">
          2. ระบบเป็นเพียงสื่อกลางในการให้บริการรับ ส่ง จัดเก็บข้อมูล
          เพื่ออำนวยความสะดวก ในการติดต่อสื่อสารให้แก่ผู้ใช้งานเท่านั้น
          ไม่มีส่วนเกี่ยวข้องกับธุรกรรมการเงินใดๆทั้งสิ้น
        </p>
      </div>
    </div>
  );

  if (!props.isOpen) {
    dialog = null;
  }
  return <div>{dialog}</div>;
}

export default Dialog;
