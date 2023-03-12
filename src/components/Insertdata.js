import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import "./Insertdata.css";
import { Select, Input, Button, Tag, message } from "antd";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, set, push } from "firebase/database";

function Insertdata() {
  const [ text, setText ] = useState("");
  const [ addData, setAddData ] = useState([]);
  const [ selected, setSelected ] = useState("");
  const [ error, setError ] = useState("");
  const [ state, setState ] = useState(true);

  const [ tempSelectTable, setTempSelectTable ] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  function success(){
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  function addtofirebase(){
    setState(false);
    if(selected === ""){
      setError("selectedError");
    }
    else {
      if(addData === ""){
        setError("inputError")
      }
      else {
        addData.push(text);
        set(ref(db, "test"), {
          ...addData
        })
      }
    }
  }

  function selectTable(table) {
    let tempData = [];
    if(table === "close_post"){
      onValue(ref(db, table), (snapshot) => {
        snapshot.forEach((childsnapshot) => {
          let t = childsnapshot.val();
          tempData.push(t);
        })
        setAddData([...tempData]);
        setTempSelectTable([...tempData]);
        
      });
    }
    else if(table === "color" || table === "place"){
      onValue(ref(db,"detail/"+table), (snapshot) => {
        snapshot.forEach((childsnapshot) => {
          let t = childsnapshot.val();
          tempData.push(t);
        })
        setTempSelectTable([...tempData]);
      }) 
    }
    else if(table === "find" || table === "sell"){
      onValue(ref(db,"type/"+table), (snapshot) => {
        snapshot.forEach((childsnapshot) => {
          let t = childsnapshot.val();
          tempData.push(t);
        })
        setTempSelectTable([...tempData]);
      }) 
    }
    else{
      onValue(ref(db,"detail/category/"+table), (snapshot) => {
        snapshot.forEach((childsnapshot) => {
          let t = childsnapshot.val();
          tempData.push(t);
        })
        setTempSelectTable([...tempData]);
      }) 
    }
  }

  useEffect(() => {
    console.log("this state -> ",state);
    
  }, []);

  const forMap = (tag) => {
    const tagElem = (
      <Tag
      style={{fontSize: 16, fontFamily: 'Prompt'}}
        // closable
        // onClose={(e) => {
        //   e.preventDefault();
        //   handleClose(tag);
        // }}
      >
        {tag}
      </Tag>
    );
    return (
      <p key={tag} style={{ display: 'flex',marginTop: 10 }}>
        {tagElem}
      </p>
    );
  };

  
  return (
    <div className="insertdata-container">
      <div className="select-content">
        <p className="nameselect">เลือกตารางที่ต้องการเพิ่มข้อมูลในการกรอง :</p>&nbsp;
        <Select
          defaultValue=""
          style={{ width: 200 }}
          onChange={(value) => {
            setError("");
            setSelected(value);
            selectTable(value);
            setState(true);
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
          setText(e.target.value);
          setError("")
          }}/>&nbsp;
        <Button type="primary" onClick={addtofirebase}>เพิ่มข้อมูล</Button>
      </div>
      { (error === "undefine" || error === "inputError") && <p className="text-error">กรุณากรอกข้อมูล</p>}
      {contextHolder}
      <div className="showData-content">
        {/* { state === true && tempSelectTable.map( (data,i) => {
          return (
            <p key={i}>{data}</p>
          )
        })} */}
        { state === true && tempSelectTable.map(forMap) }
        
        <p></p>
      </div>
    </div>
  );
}

export default Insertdata;
