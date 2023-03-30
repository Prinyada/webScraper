import React, { useEffect, useState } from "react";
import "./MainAdmin.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ref, onValue } from "firebase/database";
import { db } from "../realtimeData/firebase-config";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function MainAdmin() {
  const [day, setDay] = useState([]);
  const [find, setFind] = useState([]);
  const [sell, setSell] = useState([]);

  const data = {
    labels: day.map((dt) => {
      let newDate = new Date(dt);
      return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear() + 543 }`;
    }),
    datasets: [
      {
        label: "ประกาศของหาย",
        data: find,
        backgroundColor: "#008080",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "ประกาศซื้อ-ขาย",
        data: sell,
        backgroundColor: `#0F52BA`,
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  useEffect(() => {
    onValue(ref(db, "report"), (snapshot) => {
      let d = [];
      let f = [];
      let s = [];
      snapshot.forEach((childSnapshot) => {
        let day = childSnapshot.key;
        let find = childSnapshot.val().find;
        let sell = childSnapshot.val().sell;
        d.push(day);
        f.push(find);
        s.push(sell);
      });
      setDay(d);
      setFind(f);
      setSell(s);
    });
  }, []);
  return (
    <div>
      <div>
        <Bar
          style={{
            margin: "15px",
            width: "1000px",
          }}
          data={data}
          options={options}
        ></Bar>
      </div>
      {/* {day.map((dt,index) => {
        return (
          <p key={index}>{dt}</p>
        )
      })} */}
    </div>
  );
}

export default MainAdmin;
