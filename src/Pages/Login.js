import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { db } from "../realtimeData/firebase-config";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FiLogIn } from "react-icons/fi";

function Login() {
  const { state, dispatch } = useContext(UserContext);

  const [usernameDb, setUsernameDb] = useState("");
  const [passwordDb, setPasswordDb] = useState("");

  const [ usernameInput, setUsernameInput ] = useState("");
  const [ passwordInput, setPasswordInput ] = useState("");

  const [ error, setError ] = useState("")

  const navigate = useNavigate();

  function checkLogin() {
    if(usernameInput !== ''  && passwordInput !== ''){ // ต้องกรอกทั้ง 2 ช่อง
        if(usernameInput === usernameDb){ // username ถูก
            if(passwordInput === passwordDb){ // username ถูก | password ถูก
                dispatch({type:"ADMIN", payload: true})
                navigate("/admin/main");
            }
            else{ // username ถูก | password ผิด
                setError("passwordError")
            }
        }
        else{ // username ผิด
            setError("usernameError")
        }
    }
    else{ // กรอกไม่ครบหรือไม่ได้กรอกเลย
        setError("undefine")
    }
  }
  useEffect(() => {
    onValue(ref(db, "user"), (snapshot) => {
      let userDb = snapshot.val().username;
      let passDb = snapshot.val().password;
      setUsernameDb(userDb);
      setPasswordDb(passDb.toString());
    });
  }, []);

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="text-login">Login&nbsp;<FiLogIn/></h1>
        <input className="input-login" type="text" placeholder="username" onChange={e => setUsernameInput(e.target.value)}/>
        { (error === "undefine" || error === "usernameError") && <p className="text-error">username error</p>}
        <input className="input-login" type="password" placeholder="password" onChange={e => setPasswordInput(e.target.value)}/>
        { (error === "undefine" || error === "passwordError") && <p className="text-error">password error</p>}
        <div className="login-btn" onClick={checkLogin}>Login</div>
      </div>
    </div>
  );
}

export default Login;
