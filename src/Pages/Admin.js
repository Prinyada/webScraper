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
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth === undefined) {
      navigate("/login");
    } else {
      dispatch({ type: "ADMIN", payload: true });
      setAuth(auth);
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
