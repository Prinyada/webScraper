import React, { useContext, useEffect } from "react";
import "./Admin.css";
import { UserContext } from "../App";
import { Routes, Route } from "react-router-dom";
import Editpassword from "../components/Editpassword";
import InsertAndDelete from "../components/Insertdata";
import MainAdmin from "../components/MainAdmin";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Admin() {
  const { auth, setAuth } = useContext(AuthContext);
  console.log("this user -> ",auth);
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(auth === null){
      navigate("/login");
    }
    else{
      console.log('useffect Admin');
      dispatch({ type: "ADMIN", payload: true });
    }
  }, []);

  return (
    <div className="admin-container">
      <Routes>
        <Route path="main" element={<MainAdmin />} />
        <Route path="editpassword" element={<Editpassword />} />
        <Route path="insertdata" element={<InsertAndDelete />} />
      </Routes>
    </div>
  );
}

export default Admin;
