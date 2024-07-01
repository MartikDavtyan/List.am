import React, { useRef, useState } from 'react'
import { Routes , Route , Link } from "react-router-dom";
import HomePage from "./pages/homePage";

import Header from './companents/Header'
export default function Projectmain() {  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}
