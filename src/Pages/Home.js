import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { UserContext } from "../App"

function Home() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  // const date = new Date();
  // console.log("date now -> ",date.getHours(),date.getMinutes(),date.getSeconds());

  useEffect(() =>{ 
    dispatch({ type: "ADMIN", payload: false });
  },[]);


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
        <button className="primaryBtn button" onClick={lostItemClick}>
          ประกาศของหาย
        </button>
        <button className="secondaryBtn button" onClick={secondhandClick}>
          ประกาศซื้อขาย
        </button>
      </div>
    </div>
  );
}

export default Home;
