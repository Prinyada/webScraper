import React, { useEffect, useState } from 'react';
import './MainAdmin.css';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ref, onValue } from "firebase/database";
import { db } from "../realtimeData/firebase-config";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)


function MainAdmin() {
  
  const [ day, setDay ] = useState([]);

  const data = {
    labels: day,
    datasets: [
      {
        label: '369',
        data: [3,6,9,8,9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  const options = {

  }

  useEffect(() => {
    onValue(ref(db, "report"), (snapshot) => {
      let d = [];
      snapshot.forEach((childSnapshot) => {
        let c = childSnapshot.key;
        d.push(c)
      })
      setDay(d);
    });
  },[])
  return (
    <div>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
      {/* {day.map((dt,index) => {
        return (
          <p key={index}>{dt}</p>
        )
      })} */}
    </div>
    
  )
}

export default MainAdmin