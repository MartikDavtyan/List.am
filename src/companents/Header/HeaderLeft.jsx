import React from 'react'
import '../../companents-css/Header/headerLeft.css'

export default function HeaderLeft() {
  return (
    <>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/List.am_Logo.png/261px-List.am_Logo.png" class="header-img"/>
        <div class="header-div">
            <img src="" class="header-icon" />
            <p>Բաժիններ</p>
        </div>
        <input class="header-in" type="text" placeholder="Որոնում" />
    </>
  )
}
