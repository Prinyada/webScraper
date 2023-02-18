import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import "./Insertdata.css";
import { Select, Input, Button } from "antd";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, set } from "firebase/database";

function Insertdata() {
  const [ text, setText ] = useState("");
  const [ addData, setAddData ] = useState("");
  const [ selected, setSelected ] = useState("");
  const [ error, setError ] = useState("");

  const [ tempClosepost, setTempClosePost ] = useState();

  function addtofirebase(){
    let tempData = addData;
    if(selected === ""){
      setError("selectedError");
    }
    else {
      if(addData === ""){
        setError("inputError")
      }
      else {
        // setTempClosepost
      }
    }
  }

  useEffect(() => {
    let tempClose = [];
    onValue(ref(db, "close_post"), (snapshot) => {
      snapshot.forEach((childsnapshot) => {
        let t = childsnapshot.val()
        tempClose.push(t);
      })
    });
    setTempClosePost([...tempClose])
    
  }, []);
  
  return (
    <div className="insertdata-container">
      <div className="select-content">
        <p className="nameselect">เลือกตารางที่ต้องการเพิ่มข้อมูล :</p>&nbsp;
        <Select
          defaultValue=""
          style={{ width: 200 }}
          onChange={(value) => {
            setError("");
            setSelected(value);
          }}
          options={[
            { value: "close_post", label: "close_post" },
            { value: "acessories", label: "acessories" },
            { value: "apartment_condo", label: "apartment_condo" },
            { value: "bag_wallet", label: "bag_wallet" },
            { value: "card_ticket", label: "card_ticket" },
            { value: "clothing", label: "clothing" },
            { value: "education", label: "education" },
            { value: "key", label: "key" },
            { value: "notebook_pc", label: "notebook_pc" },
            { value: "pet", label: "pet" },
            { value: "phone", label: "phone" },
            { value: "stuff", label: "stuff" },
            { value: "vehicle", label: "vehicle" },
            { value: "watch", label: "watch" },
            { value: "color", label: "color" },
            { value: "place", label: "place" },
            { value: "find", label: "find" },
            { value: "sell", label: "sell" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
        
      </div>
      { (error === "undefine" || error === "selectedError") && <p className="text-error">กรุณาเลือกตาราง</p>}
      <div className="selected-content">
        <p>ชื่อตาราง :</p>&nbsp;
          <p className="nameselected">{selected}</p>
      </div>
      <div className="input-content">
        <Input 
        style={{ width: 200 ,fontSize: 16, fontFamily: 'Prompt' }}
        placeholder="ข้อมูลที่ต้องการเพิ่ม" onChange={ e => {
          setAddData(e.target.value);
          setError("")
          }}/>&nbsp;
        <Button type="primary" onClick={addtofirebase}>เพิ่มข้อมูล</Button>
      </div>
      { (error === "undefine" || error === "inputError") && <p className="text-error">กรุณากรอกข้อมูล</p>}
      <div className="showData-content"></div>
    </div>
  );
}

export default Insertdata;
