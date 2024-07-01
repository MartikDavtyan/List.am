import React from 'react'
import '../../companents-css/Header/headerLeft.css'

export default function HeaderLeft() {
  return (
    <>
        <a href="/">
        <img href="/" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/List.am_Logo.png/261px-List.am_Logo.png" className="header-img"/>
        </a>
        <a href="/post">
        <div href="/post" className="header-div">
            <img src="" className="header-icon" />
            <p>Բաժիններ</p>
        </div>
        </a>
        <input className="header-in" type="text" placeholder="Որոնում" />
    </>
  )
}
