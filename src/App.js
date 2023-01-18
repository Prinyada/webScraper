import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, Router, useNavigate } from "react-router-dom";
import "./App.css";
import LostItems from "./Pages/LostItems";
import SecondHand from "./Pages/SecondHand";
import React from "react";
import Home from "./Pages/Home";
import { db } from "./realtimeData/firebase-config";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/lostItems" element={<LostItems />} />
        <Route exact path="/secondHand" element={<SecondHand />} />          
      </Routes>
    </div>
  );
}

export default App;
