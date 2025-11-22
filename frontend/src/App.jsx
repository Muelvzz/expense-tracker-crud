import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {

  const [toggleDark, setToggleDark] = useState(false)

  useEffect(() => {
    if (toggleDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [toggleDark])

  console.log(toggleDark)

  return (
    <div className="app-container">

      <Header 
        toggleDark={toggleDark}
        setToggleDark={setToggleDark}
      />

      <Dashboard />

    </div>
  )
}

export default App
