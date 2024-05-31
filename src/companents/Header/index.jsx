import React from 'react'
import '../../companents-css/Header/header.css'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

export default function Header() {
  return (
    <header>
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}
