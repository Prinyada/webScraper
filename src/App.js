import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Dialog } from './components/Dialog';

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const lostItems = () => { 
    
  }
  const secondHand = () => {

  }
  return (
    <div className="App">
      <div className="content">
        <h1>Online Bulletin Board</h1>
        <h5>for KMUTNB Community</h5>
      </div>
      <div className="button-wrapper">
        <button className='primaryBtn button' 
        onClick={() => {
          setOpenDialog(true);
        }}
        >
          ประกาศของหาย
        </button>
        <button className='secondaryBtn button' onClick={() => {
          setOpenDialog(true);
        }}
        >
          ประกาศของมือสอง
        </button>
        {openDialog && <Dialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>}
      </div>
    </div>
  );
}

export default App;
