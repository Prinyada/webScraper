import React, { useEffect, useState, useContext } from "react";
import "./Insertdata.css";
import { Select, Input, Button, message } from "antd";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, set } from "firebase/database";
import { HiOutlineRefresh } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext, UserContext } from "../App";

function Insertdata() {
  const [text, setText] = useState("");
  const [addData, setAddData] = useState([]);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState(true);

  const [tempSelectTable, setTempSelectTable] = useState([]);


  function showTableSelect() {
    let temp;
    if (selected === "close_post") {
      temp = "ปิดโพสต์";
    } else if (selected === "acessories") {
      temp = "อุปกรณ์เสริม";
    } else if (selected === "close_post_comment") {
      temp = "ปิดโพสต์จากคอมเมนต์";
    } else if (selected === "apartment_condo") {
      temp = "หอพัก/คอนโด/ที่อยู่อาศัย";
    } else if (selected === "bag_wallet") {
      temp = "กระเป๋า";
    } else if (selected === "card_ticket") {
      temp = "บัตร/ตั๋ว";
    } else if (selected === "clothing") {
      temp = "เครื่องแต่งกาย";
    } else if (selected === "decoration") {
      temp = "เครื่องประดับ";
    }else if (selected === "education") {
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
    }
    return temp;
  }

  function success() {
    toast.success("เพิ่มข้อมูลสำเร็จ กดรีเฟรช 1 ครั้ง", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function warning() {
    toast.warn("มีข้อมูลแล้ว กดรีเฟรช 1 ครั้ง", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function deletesuccess() {
    toast.success("ลบข้อมูลสำเร็จ กดรีเฟรช 1 ครั้ง", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  // insert data
  function addtofirebase() {
    setState(false);
    if (selected === "") {
      setError("selectedError");
    } else {
      let check = true;
      if (addData === "") {
        setError("inputError");
      } else {
        if (selected === "close_post" || selected === "close_post_comment") {
          tempSelectTable.map((data) => {
            if (data === text) {
              check = false;
            }
          });
          if (check === true) {
            addData.push(text);
            set(ref(db, selected), {
              ...addData,
            });
            success();
          } else if (check === false) {
            warning();
          }
        } else if (selected === "color" || selected === "place") {
          tempSelectTable.map((data) => {
            if (data === text) {
              check = false;
            }
          });
          if (check === true) {
            addData.push(text);
            set(ref(db, "detail/" + selected), {
              ...addData,
            });
            success();
          } else if (check === false) {
            warning();
          }
        } else {
          tempSelectTable.map((data) => {
            if (data === text) {
              check = false;
            }
          });
          if (check === true) {
            addData.push(text);
            set(ref(db, "detail/category/" + selected), {
              ...addData,
            });
            success();
          } else if (check === false) {
            warning();
          }
        }
        setSelected("");
      }
    }
  }

  // read data then select
  function selectTable(table) {
    let tempData = [];
    if (table !== "") {
      if (table === "close_post" || table === "close_post_comment") {
        onValue(ref(db, table), (snapshot) => {
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
    let data = addData;
    let position = index;
    for (let i = position; i < data.length - 1; i++) {
      data[i] = data[i + 1];
    }
    data.pop();
    setAddData(data);
    if (selected === "close_post" || selected === "close_post_comment") {
      set(ref(db, selected), {
        ...addData,
      });
    } else if (selected === "color" || selected === "place") {
      set(ref(db, "detail/" + selected), {
        ...addData,
      });
    } else {
      set(ref(db, "detail/category/" + selected), {
        ...addData,
      });
    }
    deletesuccess();
    setSelected("");
  }

  function refresh() {
    window.location.reload(true);
  }

  useEffect(() => {
    
  }, []);

  const forMap = (tag, index) => {
    return (
      <p key={tag} id={index} className="boxText">
        {tag}
        <span
          className="delete"
          onClick={() => {
            clickDeleteText(index, tag);
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
        <p className="nameselect">กรุณาเลือกหมวด :</p>
        &nbsp;
        <Select
          defaultValue="หมวด"
          className="select-table"
          onChange={(value) => {
            setError("");
            setSelected(value);
            selectTable(value);
          }}
          options={[
            { value: "close_post", label: "ปิดโพสต์" },
            { value: "close_post_comment", label: "ปิดโพสต์จากคอมเมนต์" },
            { value: "acessories", label: "อุปกรณ์เสริม" },
            { value: "apartment_condo", label: "หอพัก/คอนโด/ที่อยู่อาศัย" },
            { value: "bag_wallet", label: "กระเป๋า" },
            { value: "card_ticket", label: "บัตร/ตั๋ว" },
            { value: "clothing", label: "เครื่องแต่งกาย" },
            { value: "decoration", label: "เครื่องประดับ" },
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
        &nbsp;
        <div className="refresh" onClick={refresh}>
          <HiOutlineRefresh />
        </div>
      </div>
      {(error === "undefine" || error === "inputError") && (
        <p className="text-error">กรุณากรอกข้อมูล</p>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {showDataSelect()}
    </div>
  );
}

export default Insertdata;
