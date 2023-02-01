import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, Router, useNavigate } from "react-router-dom";
import LostItems from "./Pages/LostItems";
import SecondHand from "./Pages/SecondHand";
import React from "react";
import Home from "./Pages/Home";
import { db } from "./realtimeData/firebase-config";
import { ref, onValue } from "firebase/database";
import Header from "./components/Header";
import Admin from "./Pages/Admin";

function App() {
  class Detail {
    constructor(year, month, day, detailPost) {
      this.year = year;
      this.month = month;
      this.day = day;
      this.detailPost = detailPost;
    }
  }

  function Data(){
    const [dataLostItems, setDatadataLostItems] = useState([]);
    const [dataSecondHand, setdataSecondHand] = useState([]); 

    useEffect(() => {
      onValue(ref(db, "scraper"), (snapshot) => {
        let tempArrayLost = [];
        let tempArraySecond = [];
        snapshot.forEach((childSnapshot) => {
          let year = childSnapshot.key;
          childSnapshot.forEach((monthOfYear) => {
            let month = monthOfYear.key;
            monthOfYear.forEach((dayOfMonth) => {
              let day = dayOfMonth.key;
              let detailPost = dayOfMonth.val();
              if(detailPost.post_type === "ประกาศของหาย"){
                tempArrayLost.push(new Detail(year, month, day, detailPost))
              }
              else{
                tempArraySecond.push(new Detail(year, month, day, detailPost))
              }
            })
          })
        });
        setDatadataLostItems([...tempArrayLost]);
        setdataSecondHand([...tempArraySecond]);
      });
    }, []);
    console.log("this Lostitem -> ",dataLostItems);
    console.log("this SecondHand -> ",dataSecondHand);
  }
  Data();
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/lostItems" element={<LostItems />} />
        <Route exact path="/secondHand" element={<SecondHand />} />
        <Route exact path="/admin" element={<Admin />}/>         
      </Routes>
    </>
  );
}

export default App;
