import React, { useContext, useEffect, useState } from "react";
import "./Editpassword.css";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, update } from "firebase/database";
import { Button, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Editpassword() {
  const [passdb, setPassDb] = useState();

  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();
  const [confirmNewPass, setconfirmNewPass] = useState();

  const [errorText, setErrorText] = useState("");

  function success() {
    toast.success("แก้ไขรหัสผ่านสำเร็จ", {
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

  function error() {
    toast.error("กรุณากรอกใหม่", {
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

  function editToDb() {
    let oldP = oldPass;
    let passinDb = passdb;
    let newP = newPass;
    let confirmP = confirmNewPass;

    const numberCheck = /[0-9]{6}$/.test(newP);

    const pwdLenghtCheck = () => {
      if (newP.length === 6) {
        return true;
      } else {
        return false;
      }
    };

    if (oldP === passinDb) {
      if (numberCheck && pwdLenghtCheck()) {
        if (newP === confirmP) {
          setErrorText("");
          update(ref(db, "user"), {
            password: newP,
          });
          success();
        } else {
          setErrorText("newpassER");
          error();
        }
      } else {
        setErrorText("checkPass");
        error();
      }
    } else {
      setErrorText("oldpassER");
      error();
    }
  }

  useEffect(() => {
    onValue(ref(db, "user"), (snapshot) => {
      let passDb = snapshot.val().password;
      setPassDb(passDb);
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
      {errorText === "oldpassER" && (
        <p className="text-error">รหัสผ่านเก่าไม่ถูกต้อง</p>
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
      {errorText === "newpassER" && (
        <p className="text-error">รหัสผ่านใหม่กับยืนยันรหัสผ่านใหม่ไม่ตรงกัน</p>
      )}
      {errorText === "checkPass" && (
        <p className="text-error">รหัสผ่านต้องเป็นตัวเลข มีความยาว 6 ตัว</p>
      )}
      <div className="box-buttom">
        <Button
          style={{ marginTop: 10, width: 100 }}
          type="primary"
          onClick={editToDb}
        >
          ยืนยัน
        </Button>
      </div>
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
    </div>
  );
}

export default Editpassword;
