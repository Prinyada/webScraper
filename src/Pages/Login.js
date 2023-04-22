import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { AuthContext, UserContext } from "../App";
import { FiLogIn } from "react-icons/fi";

function Login() {
  const { setAuth } = useContext(AuthContext);

  const { setSession } = useContext(AuthContext);

  const { state, dispatch } = useContext(UserContext);

  const [usernameDb, setUsernameDb] = useState("");
  const [passwordDb, setPasswordDb] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function checkLogin(event) {
    event.preventDefault();
    if (usernameInput !== "" && passwordInput !== "") {
      // ต้องกรอกทั้ง 2 ช่อง
      if (usernameInput === usernameDb) {
        // username ถูก
        if (passwordInput === passwordDb) {
          // username ถูก | password ถูก
          console.log("username -> ",usernameDb);
          setAuth(usernameDb);
          navigate("/admin/main");
        } else {
          // username ถูก | password ผิด
          setError("passwordError");
        }
      } else {
        // username ผิด
        setError("usernameError");
      }
    } else if (usernameInput === "" || passwordInput === "") {
      // กรอกไม่ครบหรือไม่ได้กรอกเลย
      setError("undefine");
    }
  }

  useEffect(() => {
    onValue(ref(db, "user"), (snapshot) => {
      let userDb = snapshot.val().username;
      let passDb = snapshot.val().password;
      setUsernameDb(userDb);
      setPasswordDb(passDb);
    });
  }, []);

  return (
    <div className="login-container">
      <div className="login-content">
        <form className="login-content" onSubmit={checkLogin}>
          <h1 className="text-login">
            เข้าสู่ระบบ&nbsp;
            <FiLogIn />
          </h1>
          <input
            className="input-login"
            type="text"
            placeholder="ชื่อผู้ดูแล"
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          {error === "usernameError" && (
            <p className="text-error">ชื่อผู้ดูแลผิด</p>
          )}
          <input
            className="input-login"
            type="password"
            placeholder="รหัสผ่าน"
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          {error === "passwordError" && (
            <p className="text-error">รหัสผ่านผิด</p>
          )}
          {error === "undefine" && (
            <p className="text-error">กรุณากรอกชื่อผู้ใช้และรหัสผ่าน</p>
          )}
          <button className="login-btn" type="submit">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
