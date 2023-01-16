import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import "./App.css";
import Dialog from "./components/Dialog";
import LostItems from "./LostItems";
import SecondHand  from "./SecondHand";
import React from "react";

function App() {
  const [openDialog, setOpenDialog] = useState({
    message: "",
    isLoading: false,
  });
  const lostItemClick = () => {
    setOpenDialog({
      message: "lost",
      isLoading: true,
    });
  };
  const secondhandClick = () => {
    setOpenDialog({
      message: "second",
      isLoading: true,
    });
  };

  let dialogRef = useRef();
  useEffect(() => {
    let handleClose = (e) => {
      if (dialogRef.current.contains(e.target)) {
        setOpenDialog({
          isLoading: false,
        });
      }
    };
    document.addEventListener("click", handleClose);
  });

  console.log(Dialog);
  return (
    <div className="App">
      <div className="content">
        <h1>Online Bulletin Board</h1>
        <h5>for KMUTNB Community</h5>
      </div>
      <div className="button-wrapper">
        <Link to="/lostitems">
          <button
            className="primaryBtn button"
            onClick={() => {
              lostItemClick();
            }}
          >
            ประกาศของหาย
          </button>
        </Link>
        <Link to="/secondhand">
          <button
            className="secondaryBtn button"
            onClick={() => {
              secondhandClick();
            }}
          >
            ประกาศของมือสอง
          </button>
        </Link>
      </div>
      <div className="dialog" ref={dialogRef}>
        {openDialog.isLoading && <Dialog message={openDialog.message} />}
      </div>
        <Routes>
          <Route exact path="/" element={<App />}/>
          <Route exact path="lostitems" element={<LostItems/>}/>
          <Route exact path="secondhand" element={<SecondHand/>}/>
        </Routes>
    </div>
  );
}

export default App;
