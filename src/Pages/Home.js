import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { UserContext } from "../App"
import { Checkbox } from 'antd';
import Dialog from "../components/Dialog";

function Home() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const [ isOpen, setIsOpen ] = useState(false);
  const [ checkBox, setCheckBox ] = useState(false);
  // const date = new Date();
  // console.log("date now -> ",date.getHours(),date.getMinutes(),date.getSeconds());

  useEffect(() =>{ 
    dispatch({ type: "ADMIN", payload: false });
  },[]);

  const onChange = (e) => {
    let c = e.target.checked;
    setCheckBox(c);
  }

  function lostItemClick() {
    navigate("/lostItems");
  }
  function secondhandClick() {
    navigate("/secondHand");
  }

  return (
    <div className="home-container">
      <div className="header-home">
        <span className="first">O</span><span className="line-1">nline <span className="mid">B</span>ulletin <span className="end">B</span>oard</span>
        <p className="line-2">for KMUTNB Community</p>
      </div>
      <div className="button-wrapper">
        <button className="primaryBtn button" onClick={() => {
          if(checkBox === true){
            lostItemClick();
          }
        }}>
          ประกาศของหาย
        </button>
        <button className="secondaryBtn button" onClick={() => {
          if(checkBox === true){
            secondhandClick();
          }
        }}>
          ประกาศซื้อ-ขาย
        </button>
      </div>
      <div className="home-content">
        <Checkbox onChange={onChange}></Checkbox><p onClick={() => setIsOpen(true)} className="termsOfUse">ข้อตกลงในการใช้งาน</p>
      </div>
      <Dialog isOpen={isOpen} onClose={(e) => setIsOpen(false)}></Dialog>
    </div>
  );
}

export default Home;
