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
import { Select } from "antd";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function MainAdmin() {
  const [day, setDay] = useState([]);
  const [find, setFind] = useState([]);
  const [sell, setSell] = useState([]);
  const [select, setSelect] = useState(false);

  function newDataThenSelect(value) {
    let sizeArray = day.length;
    let newFind = [];
    let newSell = [];
    let newDate = [];
    let firstIndex;
    let count;
    let lastIndex;
    let tempFind = 0;
    let tempSell = 0;
    let dayFirst;
    let dayLast;
    if (value === "all") {
      setSelect(false);
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
        setDay([...d]);
        setFind([...f]);
        setSell([...s]);
      });
    } else if (value === "week") {
      setSelect(true);
      firstIndex = 0;
      count = 7;
      lastIndex = firstIndex + count;
      let find7Day;
      let sell7Day;
      let tempSize = sizeArray;
      while (tempSize > 0) {
        find7Day = find.slice(firstIndex, lastIndex);
        sell7Day = sell.slice(firstIndex, lastIndex);
        dayFirst = new Date(day.slice(firstIndex, firstIndex + 1));
        dayLast = new Date(day.slice(lastIndex - 1, lastIndex));
        tempFind = 0;
        tempSell = 0;
        for (let i = 0; i < count; i++) {
          if (find7Day[i] !== undefined) {
            tempFind = tempFind + find7Day[i];
            tempSell = tempSell + sell7Day[i];
          }
        }
        let dayOfWeek = `${dayFirst.getDate()}/${dayFirst.getMonth() + 1}/${
          dayFirst.getFullYear() + 543
        }-${dayLast.getDate()}/${dayLast.getMonth() + 1}/${
          dayLast.getFullYear() + 543
        }`;
        newFind.push(tempFind);
        newSell.push(tempSell);
        newDate.push(dayOfWeek);
        firstIndex = lastIndex;
        lastIndex = firstIndex + count;
        if (lastIndex > sizeArray) {
          let tempCount = sizeArray % count;
          lastIndex = firstIndex + tempCount;
        }
        tempSize = tempSize - count;
      }
      setDay(newDate);
      setFind(newFind);
      setSell(newSell);
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
      setDay([...d]);
      setFind([...f]);
      setSell([...s]);
    });
  }, []);

  return (
    <div className="main-admin-container">
      <div className="chart-content">
        <div className="header-chart">
          <p className="header-chart-text">รายงานผลการค้นหา</p>
          <Select
            defaultValue="ทั้งหมด"
            className="select-table-main"
            onChange={(value) => {
              newDataThenSelect(value);
            }}
            options={[
              { value: "all", label: "ทั้งหมด" },
              { value: "week", label: "รายสัปดาห์" },
            ]}
          />
        </div>
        {select === false && (
          <Bar className="bar-chart" data={data} options={options}></Bar>
        )}
        {select === true && (
          <Bar className="bar-chart" data={dataSelect} options={options}></Bar>
        )}
      </div>
      <div className="chart-content-2">
        <div className="chart-content-left">
          <p className="text-result">ประกาศของหาย ณ ปัจจุบัน</p>
        </div>
        <div className="chart-content-right">
        <p className="text-result">ประกาศซื้อ-ขาย ณ ปัจจุบัน</p>
        </div>
      </div>
    </div>
  );
}

export default MainAdmin;
