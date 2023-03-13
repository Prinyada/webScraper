import React from 'react'
import ShowDataLost from '../components/ShowDataLost'
import { Routes, Route } from 'react-router-dom'

function RouteShowData() {
    // console.log('====================================');
    // console.log("this route -> ",data);
    // console.log('====================================');
  return (
    <Routes>
        <Route path="/showdatalost" element={<ShowDataLost/>}/>    
    </Routes>
  )
}

export default RouteShowData