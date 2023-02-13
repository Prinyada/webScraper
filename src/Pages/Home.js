import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  function lostItemClick() {
    navigate("/lostItems");
  }
  function secondhandClick() {
    navigate("/secondHand");
  }

  return (
    <div className="home-container">
      <div className="header-home">
        <p className="line-1">Online Bulletin Board</p>
        <p className="line-2">for KMUTNB Community</p>
      </div>
      <div className="button-wrapper">
        <button className="primaryBtn button" onClick={lostItemClick}>
          ประกาศของหาย
        </button>
        <button className="secondaryBtn button" onClick={secondhandClick}>
          ประกาศของมือสอง
        </button>
      </div>
    </div>
  );
}

export default Home;
