import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, Router, useNavigate } from "react-router-dom";
import LostItems from "./Pages/LostItems";
import SecondHand from "./Pages/SecondHand";
import React from "react";
import Home from "./Pages/Home";
import { db } from "./realtimeData/firebase-config";
import Header from "./components/Header";
import Admin from "./Pages/Admin";

function App() {
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
