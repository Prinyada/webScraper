import React, { useEffect, useState } from "react";
import "./Insertdata.css";
import { Select, Input, Button, Tag, message, Modal } from "antd";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, set, remove } from "firebase/database";

function Insertdata() {
  const [text, setText] = useState("");
  const [addData, setAddData] = useState([]);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState(true);
  const [ deleteData, setDeleteData ] = useState(false);

  const [tempSelectTable, setTempSelectTable] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function showTableSelect() {
    let temp;
    if (selected === "close_post") {
      temp = "ปิดโพสต์";
    } else if (selected === "acessories") {
      temp = "อุปกรณ์เสริม";
    } else if (selected === "apartment_condo") {
      temp = "หอพัก/คอนโด/ที่อยู่อาศัย";
    } else if (selected === "bag_wallet") {
      temp = "กระเป๋า";
    } else if (selected === "card_ticket") {
      temp = "บัตร/ตั๋ว";
    } else if (selected === "clothing") {
      temp = "เครื่องแต่งกาย";
    } else if (selected === "education") {
      temp = "เกี่ยวกับการศึกษา";
    } else if (selected === "key") {
      temp = "กุญแจ";
    } else if (selected === "notebook_pc") {
      temp = "โน๊ตบุ๊ค";
    } else if (selected === "pet") {
      temp = "สัตว์เลี้ยง";
    } else if (selected === "phone") {
      temp = "โทรศัพท์";
    } else if (selected === "stuff") {
      temp = "ของใช้ภายในบ้าน";
    } else if (selected === "vehicle") {
      temp = "ยานพาหนะ";
    } else if (selected === "watch") {
      temp = "นาฬิกา";
    } else if (selected === "color") {
      temp = "สี";
    } else if (selected === "place") {
      temp = "สถานที่";
    } else if (selected === "find") {
      temp = "ตามหา";
    } else if (selected === "sell") {
      temp = "ซื้อ-ขาย";
    }
    return temp;
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // insert data
  function addtofirebase() {
    setState(false);
    if (selected === "") {
      setError("selectedError");
    } else {
      if (addData === "") {
        setError("inputError");
      } else {
        if (selected === "close_post") {
          addData.push(text);
          set(ref(db, `test`), {
            ...addData,
          });
        } else if (selected === "color" || selected === "place") {
          addData.push(text);
          set(ref(db, "detail/" + selected), {
            ...addData,
          });
        } else if (selected === "find" || selected === "sell") {
          addData.push(text);
          set(ref(db, "type/" + selected), {
            ...addData,
          });
        } else {
          addData.push(text);
          set(ref(db, "detail/category/" + selected), {
            ...addData,
          });
        }
        setSelected("");
      }
    }
  }

  // read data then select
  async function selectTable(table) {
    let tempData = [];
    if (table !== "") {
      if (table === "close_post") {
        onValue(ref(db, "test"), (snapshot) => {
          snapshot.forEach((childsnapshot) => {
            let t = childsnapshot.val();
            tempData.push(t);
          });
          setAddData([...tempData]);
          setTempSelectTable([...tempData]);
        });
      } else if (table === "color" || table === "place") {
        onValue(ref(db, "detail/" + table), (snapshot) => {
          snapshot.forEach((childsnapshot) => {
            let t = childsnapshot.val();
            tempData.push(t);
          });
          setAddData([...tempData]);
          setTempSelectTable([...tempData]);
        });
      } else if (table === "find" || table === "sell") {
        onValue(ref(db, "type/" + table), (snapshot) => {
          snapshot.forEach((childsnapshot) => {
            let t = childsnapshot.val();
            tempData.push(t);
          });
          setAddData([...tempData]);
          setTempSelectTable([...tempData]);
        });
      } else {
        onValue(ref(db, "detail/category/" + table), (snapshot) => {
          snapshot.forEach((childsnapshot) => {
            let t = childsnapshot.val();
            tempData.push(t);
          });
          setAddData([...tempData]);
          setTempSelectTable([...tempData]);
        });
      }
    }
  }

  // delete data
  function clickDeleteText(index) {
    console.log("this index -> ",index);
    if (index !== "" || index !== undefined) {
      let t = ref(db, `test/${index}`);
      remove(t).then(
        
      )
      .then(function(){
        
      });
    }
  }

  useEffect(() => {}, []);

  const forMap = (tag, index) => {
    return (
      <p
        key={tag}
        id={index}
        className="boxText"
        onClick={() => {
          // clickText(index);
        }}
      >
        {tag}
        <span
          className="delete"
          onClick={() => {
            clickDeleteText(index);
          }}
        >
          x
        </span>
      </p>
    );
  };

  function showDataSelect() {
    if (selected !== "") {
      return (
        <div className="showData-content">
          {state === true && tempSelectTable.map(forMap)}
        </div>
      );
    }
  }

  return (
    <div className="insertdata-container">
      <div className="select-content">
        <p className="nameselect">เลือกหมวดที่ต้องการเพิ่มข้อมูลในการกรอง :</p>
        &nbsp;
        <Select
          defaultValue=""
          className="select-table"
          onChange={(value) => {
            setError("");
            setSelected(value);
            selectTable(value);
            // setState(true);
          }}
          options={[
            { value: "close_post", label: "ปิดโพสต์" },
            { value: "acessories", label: "อุปกรณ์เสริม" },
            { value: "apartment_condo", label: "หอพัก/คอนโด/ที่อยู่อาศัย" },
            { value: "bag_wallet", label: "กระเป๋า" },
            { value: "card_ticket", label: "บัตร/ตั๋ว" },
            { value: "clothing", label: "เครื่องแต่งกาย" },
            { value: "education", label: "เกี่ยวกับการศึกษา" },
            { value: "key", label: "กุญแจ/คีย์การ์ด" },
            { value: "notebook_pc", label: "คอมพิวเตอร์/โน๊ตบุ๊ค" },
            { value: "pet", label: "สัตว์เลี้ยง" },
            { value: "phone", label: "โทรศัพท์" },
            { value: "stuff", label: "ของใช้ภายในบ้าน" },
            { value: "vehicle", label: "รถยนต์/รถมอเตอร์ไซต์" },
            { value: "watch", label: "นาฬิกา" },
            { value: "color", label: "สี" },
            { value: "place", label: "สถานที่" },
            { value: "find", label: "ตามหา" },
            { value: "sell", label: "ซื้อ-ขาย" },
          ]}
        />
      </div>
      {(error === "undefine" || error === "selectedError") && (
        <p className="text-error">กรุณาเลือกหมวด</p>
      )}
      <div className="selected-content">
        <p>หมวดที่เลือก :</p>&nbsp;
        <p className="nameselected">{showTableSelect()}</p>
      </div>
      <div className="input-content">
        <Input
          style={{ width: 200, fontSize: 16, fontFamily: "Prompt" }}
          placeholder="ข้อมูลที่ต้องการเพิ่ม"
          onChange={(e) => {
            setText(e.target.value);
            setError("");
          }}
        />
        &nbsp;
        <Button type="primary" onClick={addtofirebase}>
          เพิ่มข้อมูล
        </Button>
      </div>
      {(error === "undefine" || error === "inputError") && (
        <p className="text-error">กรุณากรอกข้อมูล</p>
      )}
      {contextHolder}
      {showDataSelect()}
    </div>
  );
}

export default Insertdata;
