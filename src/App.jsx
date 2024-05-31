import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './companents/Header'
import Cotalog from './companents/Cotalog'
import Story from './companents/Story'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main">
        <Cotalog />
        <Story />
      </div>
    </>
  )
}

export default App
