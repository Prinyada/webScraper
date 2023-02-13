import React,{  useEffect, useState } from "react";
import "./Editpassword.css";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, update } from "firebase/database";

function Editpassword() {
  const [ passdb, setPassDb ] = useState("");

  const [oldPass, setOldPass ] = useState("");
  const [newPass, setNewPass ] = useState("");
  const [confirmNewPass, setconfirmNewPass ] = useState("");

  const [ error, setError ] = useState("")


  function editToDb() {
    let newP = parseInt(newPass);
    if(oldPass === passdb){ //passเก่าตรงกัน
      if(newPass === confirmNewPass){ //พร้อมแก้ไข
        setError("noError")
        update(ref(db,"user"),{
          password: newP
        });
      }
      else{ // newpass กับ confirmnewpass ไม่ตรงกัน
        setError("newpassER")
      }
    }
    else { // ใส่passเก่าไม่ถูก
      setError("oldpassER")
    }
  }
  useEffect(() => {
    onValue(ref(db, "user"), (snapshot) => {
      let passDb = snapshot.val().password;
      setPassDb(passDb.toString());
    });
  }, []);

  return (
    <div className="editpassword-container">
      <input
        className="editpasswordInput"
        type="password"
        placeholder="old password"
        onChange={ e => setOldPass(e.target.value)}
      />
      { error === "oldpassER" && <p className="text-error">old password error</p>}
      <input
        className="editpasswordInput"
        type="password"
        placeholder="new password"
        onChange={ e => setNewPass(e.target.value)}
      />
      <input
        className="editpasswordInput"
        type="password"
        placeholder="confirm password"
        onChange={ e => setconfirmNewPass(e.target.value)}
      />
      { error === "newpassER" && <p className="text-error">new password not same</p>}
      <div className="editconfirm-btn" onClick={editToDb}>Confirm</div>
    </div>
  );
}

export default Editpassword;
