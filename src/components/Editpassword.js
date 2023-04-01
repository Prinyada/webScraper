import React, { useEffect, useState } from "react";
import "./Editpassword.css";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, update } from "firebase/database";
import { Button, Checkbox, Form, Input } from "antd";

function Editpassword() {
  const [passdb, setPassDb] = useState("");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setconfirmNewPass] = useState("");

  const [error, setError] = useState("");

  function editToDb() {
    let newP = parseInt(newPass);
    if (oldPass === passdb) {
      //passเก่าตรงกัน
      if (newPass === confirmNewPass) {
        //พร้อมแก้ไข
        setError("noError");
        update(ref(db, "user"), {
          password: newP,
        });
      } else {
        // newpass กับ confirmnewpass ไม่ตรงกัน
        setError("newpassER");
      }
    } else {
      // ใส่passเก่าไม่ถูก
      setError("oldpassER");
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
      <Input
        style={{
          width: 300,
          fontSize: 16,
          fontFamily: "Prompt",
          marginTop: 10,
        }}
        type="password"
        placeholder="old password"
        onChange={(e) => setOldPass(e.target.value)}
      />
      {error === "oldpassER" && (
        <p className="text-error">old password error</p>
      )}
      <Input
        style={{
          width: 300,
          fontSize: 16,
          fontFamily: "Prompt",
          marginTop: 10,
        }}
        type="password"
        placeholder="new password"
        onChange={(e) => setNewPass(e.target.value)}
      />
      <Input
        style={{
          width: 300,
          fontSize: 16,
          fontFamily: "Prompt",
          marginTop: 10,
        }}
        type="password"
        placeholder="confirm password"
        onChange={(e) => setconfirmNewPass(e.target.value)}
      />
      {error === "newpassER" && (
        <p className="text-error">new password not same</p>
      )}
      <Button style={{ marginTop: 10,width: 100 }} type="primary" onClick={editToDb}>ยืนยัน</Button>
    </div>
  );
}

export default Editpassword;
