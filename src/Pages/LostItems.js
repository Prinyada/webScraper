import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../realtimeData/firebase-config";

function LostItems(){
  const [dataLost, setDataLost] = useState();
  const dataCollectionRef = collection(db, "kmutnbcommunity");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dataCollectionRef);
      console.log(data);
    };

    getData();
  }, []);
  return (
    <div>LostItems</div>
  )
}

export default LostItems;
