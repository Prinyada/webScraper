import React, { useEffect, useState, useContext } from "react";
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
import { Select } from "antd";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function MainAdmin() {
  const [day, setDay] = useState([]);
  const [find, setFind] = useState([]);
  const [sell, setSell] = useState([]);

  function past7days(){
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
      let new7Day = d.slice(-7);
      let new7Find = f.slice(-7);
      let new7Sell = s.slice(-7);
      setDay([...new7Day]);
      setFind([...new7Find]);
      setSell([...new7Sell]);
    });
  }

  function past15days(){
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
      let new15Day = d.slice(-15);
      let new15Find = f.slice(-15);
      let new15Sell = s.slice(-15);
      setDay([...new15Day]);
      setFind([...new15Find]);
      setSell([...new15Sell]);
    });
  }

  function past30days(){
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
      let new30Day = d.slice(-30);
      let new30Find = f.slice(-30);
      let new30Sell = s.slice(-30);
      setDay([...new30Day]);
      setFind([...new30Find]);
      setSell([...new30Sell]);
    });
  }

  function newDataThenSelect(value) {
    if(value === "seven"){
      past7days();
    }
    else if(value === "fifteen"){
      past15days();
    }
    else if(value === "thirty"){
      past30days();
    }

  }

  const data = {
    labels: day.map((dt) => {
      let newDate = new Date(dt);
      return `${newDate.getDate()}/${newDate.getMonth() + 1}/${
        newDate.getFullYear() + 543
      }`;
    }),
    datasets: [
      {
        label: "ประกาศของหาย",
        data: find,
        backgroundColor: "#008080",
        borderColor: "black",
        borderWidth: 1,
        family: "Prompt",
      },
      {
        label: "ประกาศซื้อ-ขาย",
        data: sell,
        backgroundColor: `#0F52BA`,
        borderColor: "black",
        borderWidth: 1,
        family: "Prompt",
      },
    ],
  };

  const dataSelect = {
    labels: day,
    datasets: [
      {
        label: "ประกาศของหาย",
        data: find,
        backgroundColor: "#008080",
        borderColor: "black",
        borderWidth: 1,
        family: "Prompt",
      },
      {
        label: "ประกาศซื้อ-ขาย",
        data: sell,
        backgroundColor: `#0F52BA`,
        borderColor: "black",
        borderWidth: 1,
        family: "Prompt",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "'Prompt', 'Helvetica', 'Arial', sans-serif",
            size: 16,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          color: "black",
          display: true,
          text: "วันที่",
          font: {
            family: "Prompt",
            size: 16,
          },
        },
      },
      y: {
        title: {
          color: "black",
          display: true,
          text: "จำนวน",
          font: {
            family: "Prompt",
            size: 16,
          },
        },
      },
    },
    font: {
      family: "Prompt",
    },
  };

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
      let new7Day = d.slice(-7);
      let new7Find = f.slice(-7);
      let new7Sell = s.slice(-7);
      setDay([...new7Day]);
      setFind([...new7Find]);
      setSell([...new7Sell]);
    });
  }, []);

  
  return (
    <div className="main-admin-container">
      <div className="chart-content">
        <div className="header-chart">
          <p className="header-chart-text">รายงานผลการค้นหา</p>
          <Select
            defaultValue="ย้อนหลัง 7 วัน"
            className="select-table-main"
            onChange={(value) => {
              newDataThenSelect(value);
            }}
            options={[
              { value: "seven", label: "ย้อนหลัง 7 วัน" },
              { value: "fifteen", label: "ย้อนหลัง 15 วัน" },
              { value: "thirty", label: "ย้อนหลัง 30 วัน" },
            ]}
          />
        </div>
        <Bar className="bar-chart" data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default MainAdmin;
