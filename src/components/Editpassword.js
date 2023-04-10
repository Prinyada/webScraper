import React, { useEffect, useState } from "react";
import "./Editpassword.css";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue, update } from "firebase/database";
import { Button, Input } from "antd";
import { HiOutlineRefresh } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Editpassword() {
  const [passdb, setPassDb] = useState();

  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();
  const [confirmNewPass, setconfirmNewPass] = useState();

  const [errorText, setErrorText] = useState("");

  function refresh() {
    window.location.reload(true);
  }

  function success() {
    toast.success("แก้ไขรหัสผ่านสำเร็จ กดรีเฟรช 1 ครั้ง", {
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
    toast.error('กดรีเฟรช 1 ครั้ง แล้วกรอกใหม่', {
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
    let oldP = parseInt(oldPass); // string
    let passinDb = passdb; // number
    let newP = parseInt(newPass); //number
    let tempNewP = `${newPass}`; // "string"
    let confirmP = confirmNewPass; // string

    const numberCheck = /^((?!(0))[0-9]{6})$/.test(tempNewP);
    const pwdLenghtCheck = () => {
      if (tempNewP.length === 6) {
        return true;
      } else {
        return false;
      }
    };

    if (oldP === passinDb) {
      if (numberCheck && pwdLenghtCheck()) {
        if (tempNewP === confirmP) {
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
        <p className="text-error">รหัสผ่านต้องเป็นตัวเลข, มีความยาว 6 ตัว, ห้ามขึ้นต้นด้วย 0</p>
      )}
      <div className="box-buttom">
        <Button
          style={{ marginTop: 10, width: 100 }}
          type="primary"
          onClick={editToDb}
        >
          ยืนยัน
        </Button>
        <div className="refresh" onClick={refresh}>
          <HiOutlineRefresh />
        </div>
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
