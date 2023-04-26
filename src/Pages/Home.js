import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { UserContext } from "../App";
import { Checkbox } from "antd";
import Dialog from "../components/Dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../App";


function Home() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const { checkBox, setCheckBox } = useContext(AuthContext);

  useEffect(() => {
    dispatch({ type: "ADMIN", payload: false });
  }, []);

  const onChange = (e) => {
    let c = e.target.checked;
    setCheckBox(c);
  };

  function lostItemClick() {
    navigate("/lostItems");
  }

  function secondhandClick() {
    navigate("/secondHand");
  }

  function warning() {
    toast.warn("กรุณายินยอมข้อตกลงในการใช้งาน", {
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

  return (
    <div className="home-container">
      <div className="header-home">
        <span className="first">O</span>
        <span className="line-1">
          nline <span className="mid">B</span>ulletin{" "}
          <span className="end">B</span>oard
        </span>
        <p className="line-2">for KMUTNB Community</p>
      </div>
      <div className="button-wrapper">
        <button
          className="primaryBtn button"
          onClick={() => {
            if (checkBox === true) {
              lostItemClick();
            } else {
              warning();
            }
          }}
        >
          ประกาศของหาย
        </button>
        <button
          className="secondaryBtn button"
          onClick={() => {
            console.log("this checkbox -> ",checkBox);
            if (checkBox === true) {
              secondhandClick();
            } else {
              warning();
            }
          }}
        >
          ประกาศซื้อ-ขาย
        </button>
      </div>
      <div className="home-content">
        <Checkbox onChange={onChange}></Checkbox>
        <p onClick={() => setIsOpen(true)} className="termsOfUse">
          ข้อตกลงในการใช้งาน
        </p>
      </div>
      <Dialog isOpen={isOpen} onClose={(e) => setIsOpen(false)}></Dialog>
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

export default Home;
