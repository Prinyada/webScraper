import { useEffect, useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dialog from './components/Dialog';
import React from 'react';

function App() {
  const [openDialog, setOpenDialog] = useState({
    message: "",
    isLoading: false
  });
  const lostItemClick = () => {
    setOpenDialog({
      message: "lost",
      isLoading: true
    })
  };
  const secondhandClick = () => {
    setOpenDialog({
      message: "second",
      isLoading: true
    })
  };

  let dialogRef = useRef();
  useEffect(() => {
    let handleClose = (e) => {
      if(dialogRef.current.contains(e.target)){
        setOpenDialog({
          isLoading: false
        })
        console.log(dialogRef.current);
      }     
    }
    document.addEventListener("click", handleClose)
  });
  

  return (
    <div className="App">
      <div className="content">
        <h1>Online Bulletin Board</h1>
        <h5>for KMUTNB Community</h5>
      </div>
      <div className="button-wrapper">
        <button className='primaryBtn button' 
        onClick={() => {
          lostItemClick();
        }} 
        text="ประกาศของหาย"
        >
          ประกาศของหาย
        </button>
        <button className='secondaryBtn button' 
        onClick={() => {
          secondhandClick();
        }}
        >
          ประกาศของมือสอง
        </button>
      </div>
      <div className="dialog" ref={dialogRef}>
        { openDialog.isLoading && <Dialog  message={openDialog.message}/> }
      </div>
    </div>
  );
}

export default App;