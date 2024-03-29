import { createContext, useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LostItems from "./Pages/LostItems";
import SecondHand from "./Pages/SecondHand";
import React from "react";
import Home from "./Pages/Home";
import { db } from "./realtimeData/firebase-config";
import { ref, onValue } from "firebase/database";
import Header from "./components/header";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import { initialState, reducer } from "./reducer/UseReducer";
import "./App.css";

export const UserContext = createContext();

const AuthContext = React.createContext();

function App() {
  class Detail {
    constructor(year, month, day, detailPost) {
      this.year = year;
      this.month = month;
      this.day = day;
      this.detailPost = detailPost;
    }
  }
  const [dataLostItems, setDatadataLostItems] = useState([]);
  const [dataSecondHand, setdataSecondHand] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [ auth, setAuth ] = useState(null);
  const [checkBox, setCheckBox] = useState(false);

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
            if (detailPost.post_type === "ประกาศของหาย") {
              tempArrayLost.push(new Detail(year, month, day, detailPost));
            } else {
              tempArraySecond.push(new Detail(year, month, day, detailPost));
            }
          });
        });
      });
      setDatadataLostItems([...tempArrayLost]);
      setdataSecondHand([...tempArraySecond]);
    });
  }, []);

  return (
    <>
    <AuthContext.Provider value={{ auth, setAuth, checkBox, setCheckBox }}>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/lostItems/*"
            element={<LostItems dataLost={dataLostItems} />}
          />
          <Route
            exact
            path="/secondHand"
            element={<SecondHand dataSecond={dataSecondHand} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </UserContext.Provider>
    </AuthContext.Provider>

    </>
  );
}

export { AuthContext };
export default App;
