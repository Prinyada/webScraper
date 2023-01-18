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
      <h1>Online Bulletin Board</h1>
      <h5>for KMUTNB Community</h5>
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
