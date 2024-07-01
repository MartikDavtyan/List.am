import React, { useRef, useState } from 'react'
import { Routes , Route , Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MyPage from "./pages/MyPage"

import Header from './companents/Header'
export default function Projectmain() {  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/myPage' element={<MyPage />} />
      </Routes>
    </>
  )
}
