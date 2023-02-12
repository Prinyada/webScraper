import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Editpassword from "../components/Editpassword";
import Insertdata from "../components/Insertdata";

function RouteAdmin() {
  return (
    <Routes>
        <Route path="editpassword" element={<Editpassword/>}/>
        <Route path="insertdata" element={<Insertdata/>}/> 
    </Routes>
  )
}

export default RouteAdmin;