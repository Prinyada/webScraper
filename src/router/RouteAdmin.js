import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Editpassword from "../components/Editpassword";
import Insertdata from "../components/Insertdata";
import MainAdmin from '../components/MainAdmin';

function RouteAdmin() {
  return (
    <Routes>
        <Route path="main" element={<MainAdmin/>}/>
        <Route path="editpassword" element={<Editpassword/>}/>
        <Route path="insertdata" element={<Insertdata/>}/> 
    </Routes>
  )
}

export default RouteAdmin;