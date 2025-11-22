import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {

  const [toggleDark, setToggleDark] = useState(false)
  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleUpdate, setToggleUpdate] = useState(false)

  useEffect(() => {
    if (toggleDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [toggleDark])

  return (
    <div className="app-container">

      <Header 
        toggleDark={toggleDark}
        setToggleDark={setToggleDark}
        toggleAdd={toggleAdd}
        setToggleAdd={setToggleAdd}
      />

      <Dashboard 
        toggleUpdate={toggleUpdate}
        setToggleUpdate={setToggleUpdate}
      />

    </div>
  )
}

export default App
